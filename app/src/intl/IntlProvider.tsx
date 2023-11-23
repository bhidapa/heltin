/**
 *
 * IntlProvider
 *
 */
import React, { useEffect, useMemo, useState } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import { Locale, LocaleContext, LocaleContextValue, retrieveLocale, storeLocale } from './locale';
import { Messages } from './messages';

export interface IntlProviderProps {
  children: React.ReactElement;
  defaultLocale: Locale;
  messages: Messages;
}

export const IntlProvider: React.FC<IntlProviderProps> = ({
  defaultLocale,
  messages,
  children,
}) => {
  const [locale, setLocale] = useState<Locale>(() => retrieveLocale() || defaultLocale);

  useEffect(() => {
    document.documentElement.setAttribute('lang', locale);
  }, [locale]);

  const mappedMessages = useMemo(() => {
    const en: Record<string, string> = {};
    for (const [key, value] of Object.entries(messages)) {
      if (import.meta.env.DEV && !value.en) {
        // eslint-disable-next-line no-console
        console.warn(`intl: key "${key}" does not have an "en" message`);
      }
      if (import.meta.env.DEV && key in en) {
        // eslint-disable-next-line no-console
        console.warn(
          `intl: key "${key}" already has an "en" message, replacing "${en[key]}" with "${value.en}"`,
        );
      }
      en[key] = value.en;
    }

    const hr: Record<string, string> = {};
    for (const [key, value] of Object.entries(messages)) {
      if (import.meta.env.DEV && !value.hr) {
        // eslint-disable-next-line no-console
        console.warn(
          `intl: key "${key}" does not have a "hr" message, using "en" message sa fallback`,
        );
      }
      if (import.meta.env.DEV && key in hr) {
        // eslint-disable-next-line no-console
        console.warn(
          `intl: key "${key}" already has a "hr" message, replacing "${hr[key]}" with "${value.hr}"`,
        );
      }
      hr[key] = value.hr || messages[key]?.en || '';
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
