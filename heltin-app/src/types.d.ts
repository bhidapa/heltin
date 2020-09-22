declare type Base64 = string;

declare type UUID = string;

/** Full time in ISO-8601 format. */
declare type Time = string;

/** Just the date in ISO-8601 format. */
declare type Date = string;

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module 'store/storages/localStorage' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}

declare module 'store/storages/sessionStorage' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}

/**
 * react-intl type augmentation as of v5.3.0
 */

declare module 'react-intl' {
  export type Unit =
    | 'acre'
    | 'bit'
    | 'byte'
    | 'celsius'
    | 'centimeter'
    | 'day'
    | 'degree'
    | 'fahrenheit'
    | 'fluid-ounce'
    | 'foot'
    | 'gallon'
    | 'gigabit'
    | 'gigabyte'
    | 'gram'
    | 'hectare'
    | 'hour'
    | 'inch'
    | 'kilobit'
    | 'kilobyte'
    | 'kilogram'
    | 'kilometer'
    | 'liter'
    | 'megabit'
    | 'megabyte'
    | 'meter'
    | 'mile'
    | 'mile-scandinavian'
    | 'millimeter'
    | 'milliliter'
    | 'millisecond'
    | 'minute'
    | 'month'
    | 'ounce'
    | 'percent'
    | 'petabyte'
    | 'pound'
    | 'second'
    | 'stone'
    | 'terabit'
    | 'terabyte'
    | 'week'
    | 'yard'
    | 'year';

  export interface MessageDescriptor {
    id: string;
    defaultMessage?: string;
    description?: string | Record<string, unknown>;
  }

  interface IntlConfig {
    locale: string;
    timeZone?: string;
    formats?: string[];
    textComponent?: React.ComponentType | keyof React.ReactHTML;
    messages: Record<string, string>;
    defaultLocale?: string;
    defaultFormats?: string[];
    onError?(err: string): void;
  }

  export const IntlProvider: React.FC<IntlConfig>;

  interface IntlFormatters {
    formatDate(value: number | Date, opts?: Intl.DateTimeFormatOptions): string;
    formatTime(value: number | Date, opts?: Intl.DateTimeFormatOptions): string;
    formatRelativeTime(value: number, unit: Unit, opts?: RelativeTimeFormatOptions): string;
    formatNumber(value: number, opts?: Intl.NumberFormatOptions): string;
    formatMessage(descriptor: MessageDescriptor, values?: Record<string, unknown>): string;
  }

  export type IntlShape = IntlConfig & IntlFormatters;

  export function useIntl(): IntlShape;

  export interface FormattedMessageProps extends MessageDescriptor {
    values?: Record<string, unknown>;
    tagName?: React.ElementType<unknown> | string;
    children?: (...formattedParts: string[]) => React.ReactNode;
  }
  export const FormattedMessage: React.FC<FormattedMessageProps>;

  export interface FormattedNumberProps extends Intl.NumberFormatOptions {
    value: number;
    format?: string;
    children?: (formatted: string) => React.ReactNode;
  }
  export const FormattedNumber: React.FC<FormattedNumberProps>;

  export interface FormattedDateProps extends Intl.DateTimeFormatOptions {
    value: string | number | Date;
    format?: string;
    children?: (formatted: string) => React.ReactNode;
  }
  export const FormattedDate: React.FC<FormattedDateProps>;

  export interface FormattedTimeProps extends Intl.DateTimeFormatOptions {
    value: string | number | Date;
    format?: string;
    children?: (formatted: string) => React.ReactNode;
  }
  export const FormattedTime: React.FC<FormattedTimeProps>;

  export interface RelativeTimeFormatOptions {
    numeric?: 'always' | 'auto';
    style?: 'long' | 'short' | 'narrow';
  }
  export interface FormattedRelativeTimeProps extends RelativeTimeFormatOptions {
    value: number;
    unit: Unit;
    format?: string;
    updateIntervalInSeconds?: number;
    children?: (formatted: string) => React.ReactNode;
  }
  export const FormattedRelativeTime: React.FC<FormattedRelativeTimeProps>;
}
