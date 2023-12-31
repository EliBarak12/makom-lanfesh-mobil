import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, Routes} from './src/features/navigation';
import {Questionnaire} from './src/features/questionnaire';
import {Results} from './src/features/results';
import {Tutorial} from './src/features/tutorial/Tutorial';
import {UserAgreement} from './src/features/user-agreement/UserAgreement';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {AppBootstrap} from './src/features/app-bootstrap/AppBootstrap';
import {SafeAreaView, StatusBar} from './src/components';
import {
  DEFAULT_LOCALE,
  Locale,
  LocaleContextProps,
  LocaleContextProvider,
  RTL_LOCALES,
} from './src/features/i18n/useLocale';
import {
  getStorageValue,
  setStorageValue,
  StringStorageKeys,
} from './src/features/storage/storage';
import {GetSupport} from './src/features/get-support/GetSupport';
import {Toolbox} from './src/features/toolbox/Toolbox';
import {CrisisSupport} from './src/features/crisis-support/CrisisSupport';
import {FindProCare} from './src/features/find-pro-care/FindProCare';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';

const Stack = createNativeStackNavigator<RootStackParamList>();

const DEFAULT_ROUTE_OPTIONS = {
  gestureEnabled: false,
  headerShown: false,
  headerLeft: () => <></>,
};

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#015C7C',
    flex: 1,
  };

  const defaultComponentsTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#42a5f5',
      secondary: '#b2dfdb',
    },
  };

  const pageContentStyle = {
    backgroundColor: '#FFFFFF',
  };

  const initialLocale =
    (getStorageValue(StringStorageKeys.SelectedLocale) as Locale) ??
    DEFAULT_LOCALE;
  const [selectedLocale, _setSelectedLocale] = useState<Locale>(initialLocale);

  const setSelectedLocale = useCallback((locale: Locale) => {
    setStorageValue(StringStorageKeys.SelectedLocale, locale);
    _setSelectedLocale(locale);
  }, []);

  const isSelectedLocaleRTL = RTL_LOCALES.includes(selectedLocale);

  const localeContextValue: LocaleContextProps = useMemo(
    () => ({
      locale: selectedLocale,
      setLocale: setSelectedLocale,
      isRtl: isSelectedLocaleRTL,
    }),
    [selectedLocale, setSelectedLocale],
  );

  // make sure app runs on RTL on first boot
  useEffect(() => {
    if (isSelectedLocaleRTL) {
      I18nManager.forceRTL(true);
      !I18nManager.isRTL && RNRestart.Restart();
    } else {
      I18nManager.forceRTL(false);
      I18nManager.isRTL && RNRestart.Restart();
    }
  }, []);

  return (
    <LocaleContextProvider value={localeContextValue}>
      <PaperProvider theme={defaultComponentsTheme}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                contentStyle: pageContentStyle,
              }}>
              <Stack.Screen
                name={Routes.AppBootstrap}
                component={AppBootstrap}
                options={DEFAULT_ROUTE_OPTIONS}
              />
              <Stack.Screen
                name={Routes.UserAgreement}
                component={UserAgreement}
                options={DEFAULT_ROUTE_OPTIONS}
              />
              <Stack.Screen
                name={Routes.Tutorial}
                component={Tutorial}
                options={DEFAULT_ROUTE_OPTIONS}
              />
              <Stack.Screen
                name={Routes.Questionnaire}
                component={Questionnaire}
                options={DEFAULT_ROUTE_OPTIONS}
              />
              <Stack.Screen
                name={Routes.Results}
                component={Results}
                options={DEFAULT_ROUTE_OPTIONS}
              />
              <Stack.Screen
                name={Routes.Toolbox}
                component={Toolbox}
                options={DEFAULT_ROUTE_OPTIONS}
              />
              <Stack.Screen
                name={Routes.GetSupport}
                component={GetSupport}
                options={DEFAULT_ROUTE_OPTIONS}
              />
              <Stack.Screen
                name={Routes.CrisisSupport}
                component={CrisisSupport}
                options={DEFAULT_ROUTE_OPTIONS}
              />
              <Stack.Screen
                name={Routes.FindProCare}
                component={FindProCare}
                options={DEFAULT_ROUTE_OPTIONS}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </LocaleContextProvider>
  );
}

export default App;
