import {createContext, useContext} from 'react';

export const LOCALES = ['en-US', 'il', 'ru', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];
export const RTL_LOCALES: Array<Locale> = ['il', 'ar'];

export const DEFAULT_LOCALE: Locale = 'il';

export type LocaleContextProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isRtl: boolean;
};

const LocaleContext = createContext<LocaleContextProps>(null!);

export const LocaleContextProvider = LocaleContext.Provider;

export const useLocale = () => useContext(LocaleContext);
