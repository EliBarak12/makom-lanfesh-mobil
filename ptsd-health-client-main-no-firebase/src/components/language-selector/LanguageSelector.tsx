import {Menu, Pressable, StyleSheet, View} from '../index';
import React, {useState} from 'react';
import {Ar, Il, Ru, Uk} from '../images/flags';
import {
  Locale,
  LOCALES,
  RTL_LOCALES,
  useLocale,
} from '../../features/i18n/useLocale';
import {CheckCircle} from '../images';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';

const LANGUAGE_NAME_BY_LOCALE: Record<Locale, string> = {
  'en-US': 'English (UK)',
  il: 'Hebrew',
  ru: 'Русский',
  ar: 'عربيه',
};

const LANGUAGE_ICON_BY_LOCALE: Record<Locale, any> = {
  'en-US': <Uk />,
  il: <Il />,
  ru: <Ru />,
  ar: <Ar />,
};

export const LanguageSelector = () => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const {locale, setLocale, isRtl} = useLocale();

  function onLanguageSelect(item: Locale) {
    setLocale(item);
    closeMenu();

    I18nManager.forceRTL(RTL_LOCALES.includes(item));
    // TODO: use a context at the top level of the app instead and re-render everything without restart
    RNRestart.Restart();
  }

  return (
    <View style={styles.root}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Pressable style={styles.openMenuButton} onPress={openMenu}>
            {LANGUAGE_ICON_BY_LOCALE[locale]}
          </Pressable>
        }>
        {LOCALES.map(item => (
          <Pressable
            style={[
              styles.languageMenuButton,
              isRtl && {flexDirection: 'row-reverse'},
            ]}
            onPress={() => onLanguageSelect(item)}
            key={item}>
            {LANGUAGE_ICON_BY_LOCALE[item]}
            <Menu.Item
              style={
                isRtl && {
                  flexDirection: 'row-reverse',
                }
              }
              titleStyle={isRtl && {alignSelf: 'flex-end'}}
              title={LANGUAGE_NAME_BY_LOCALE[item]}
            />
            {locale === item && <CheckCircle />}
          </Pressable>
        ))}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  openMenuButton: {},
  languageMenuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
});
