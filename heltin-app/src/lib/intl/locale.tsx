/**
 *
 * locale
 *
 */

import React, { useContext } from 'react';
import { local } from 'lib/storage';

export const LOCALE_KEY = 'locale';

export function retrieveLocale(): Locale | null {
  return local.get(LOCALE_KEY) || null;
}

export function storeLocale(locale: Locale | null) {
  if (locale) {
    local.set(LOCALE_KEY, locale);
  } else {
    local.remove(LOCALE_KEY);
  }
}

export type Locale = 'en' | 'ba';

export interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale | null) => void;
}

export const LocaleContext = React.createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
});

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}
