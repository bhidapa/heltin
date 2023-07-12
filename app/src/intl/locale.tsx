/**
 *
 * locale
 *
 */
import React, { useContext } from 'react';

import { localStore } from 'lib/store';

export const LOCALE_KEY = '@heltin/locale';

export function retrieveLocale() {
  return (localStore.getItem(LOCALE_KEY) || null) as Locale | null;
}

export function storeLocale(locale: Locale | null) {
  if (locale) {
    localStore.setItem(LOCALE_KEY, locale);
  } else {
    localStore.removeItem(LOCALE_KEY);
  }
}

export type Locale = 'en' | 'hr';

export interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale | null) => void;
}

export const LocaleContext = React.createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {
    /**/
  },
});

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}
