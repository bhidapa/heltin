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

  const mappedMessages = useMemo(
    () => ({
      en: Object.keys(messages).reduce((acc, curr) => ({ ...acc, [curr]: messages[curr].en }), {}),
      hr: Object.keys(messages).reduce((acc, curr) => {
        const baMessage = messages[curr].hr;
        if (!baMessage && locale === 'hr') {
          // eslint-disable-next-line no-console
          console.warn(
            `intl: key "${curr}" does not have a "hr" message, using "en" message sa fallback`,
          );
        }
        return {
          ...acc,
          [curr]: baMessage ? baMessage : messages[curr].en,
        };
      }, {}),
    }),
    [messages, locale],
  );

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
