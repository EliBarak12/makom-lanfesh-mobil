import {MMKVLoader} from 'react-native-mmkv-storage';
import {DEFAULT_LOCALE} from '../i18n/useLocale';
import {I18nManager} from 'react-native';

const storage = new MMKVLoader().initialize();

export enum BoolStorageKeys {
  IsDataInitialized = 'isDataInitialized',
  IsTutorialFinished = 'isTutorialFinished',
  IsAgreedToTerms = 'isAgreedToTerms',
  AreNotificationsEnabled = 'isNotificationsEnabled',
}

export enum StringStorageKeys {
  SelectedLocale = 'selectedLocale',
}

export enum NumberStorageKeys {
  LastUserScore = 'LastUserScore',
  NumOfCompletedTests = 'NumOfCompletedTests',
  TotalTestsScore = 'TotalTestsScore',
}

type StorageKeys = BoolStorageKeys | StringStorageKeys | NumberStorageKeys;

const isBooleanKey = (key: StorageKeys): key is BoolStorageKeys =>
  Object.values(BoolStorageKeys).includes(key as BoolStorageKeys);

const isStringKey = (key: StorageKeys): key is StringStorageKeys =>
  Object.values(StringStorageKeys).includes(key as StringStorageKeys);

const isNumberKey = (key: StorageKeys): key is NumberStorageKeys =>
  Object.values(NumberStorageKeys).includes(key as NumberStorageKeys);

export function getStorageValue(key: BoolStorageKeys): boolean;
export function getStorageValue(key: StringStorageKeys): string;
export function getStorageValue(key: NumberStorageKeys): number;
export function getStorageValue(
  key: StorageKeys,
): string | boolean | number | undefined {
  if (isBooleanKey(key)) {
    return storage.getBool(key);
  }

  if (isStringKey(key)) {
    return storage.getString(key);
  }

  if (isNumberKey(key)) {
    return storage.getInt(key);
  }

  return undefined;
}

export function setStorageValue(key: BoolStorageKeys, value: boolean): boolean;
export function setStorageValue(key: StringStorageKeys, value: string): boolean;
export function setStorageValue(key: NumberStorageKeys, value: number): boolean;
export function setStorageValue(
  key: StorageKeys,
  value: boolean | string | number,
): boolean {
  if (isBooleanKey(key)) {
    return storage.setBool(key, value as boolean);
  }

  if (isStringKey(key)) {
    return storage.setString(key, value as string);
  }

  if (isNumberKey(key)) {
    return storage.setInt(key, value as number);
  }

  return false;
}

export const DEFAULT_ARE_NOTIFICATIONS_ENABLED = true;

export function initStorage(resetSavedData: boolean = false) {
  const isDataInitialized = getStorageValue(BoolStorageKeys.IsDataInitialized);

  if (isDataInitialized && !resetSavedData) {
    return;
  }

  storage.clearStore();

  setStorageValue(BoolStorageKeys.IsDataInitialized, true);
  setStorageValue(StringStorageKeys.SelectedLocale, DEFAULT_LOCALE);

  setStorageValue(
    BoolStorageKeys.AreNotificationsEnabled,
    DEFAULT_ARE_NOTIFICATIONS_ENABLED,
  );
}
