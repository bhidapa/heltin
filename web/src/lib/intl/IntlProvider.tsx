/**
 *
 * IntlProvider
 *
 */

import React from 'react';
import { useState, useMemo } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import { Messages } from './messages';

// locale
import { LocaleContext, Locale, retrieveLocale, LocaleContextValue, storeLocale } from './locale';

export interface IntlProviderProps {
  defaultLocale: Locale;
  messages: Messages;
}

export const IntlProvider: React.FC<IntlProviderProps> = ({
  defaultLocale,
  messages,
  children,
}) => {
  const [locale, setLocale] = useState<Locale>(() => retrieveLocale() || defaultLocale);

  const mappedMessages = useMemo(() => {
    const en: Record<string, string> = {};
    for (const [key, value] of Object.entries(messages)) {
      if (__DEV__ && !value.en) {
        // eslint-disable-next-line no-console
        console.warn(`intl: key "${key}" does not have an "en" message`);
      }
      if (__DEV__ && key in en) {
        // eslint-disable-next-line no-console
        console.warn(
          `intl: key "${key}" already has an "en" message, replacing "${en[key]}" with "${value.en}"`,
        );
      }
      en[key] = value.en;
    }

    const hr: Record<string, string> = {};
    for (const [key, value] of Object.entries(messages)) {
      if (__DEV__ && !value.hr) {
        // eslint-disable-next-line no-console
        console.warn(
          `intl: key "${key}" does not have a "hr" message, using "en" message sa fallback`,
        );
      }
      if (__DEV__ && key in hr) {
        // eslint-disable-next-line no-console
        console.warn(
          `intl: key "${key}" already has a "hr" message, replacing "${hr[key]}" with "${value.hr}"`,
        );
      }
      hr[key] = value.hr || messages[key].en;
    }

    return { en, hr };
  }, []);

  const localeContextValue = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale: (nextLocale) => {
        storeLocale(nextLocale);
        setLocale(nextLocale || defaultLocale);
      },
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={localeContextValue}>
      <ReactIntlProvider locale="hr" messages={mappedMessages[locale]}>
        {children}
      </ReactIntlProvider>
    </LocaleContext.Provider>
  );
};
