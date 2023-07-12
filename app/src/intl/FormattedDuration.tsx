/**
 *
 * FormattedDuration
 *
 * "Lasted for 1 hours and 30 minutes.""
 *
 */
import React from 'react';
import { useIntl } from 'react-intl';

export interface FormattedDurationProps {
  /**
   * Duration in milliseconds. Will be floored to minutes.
   * Negative values will be interpreted as zero (0).
   */
  value: number;
  unitDisplay?: 'long' | 'short' | 'narrow';
}

export const FormattedDuration: React.FC<FormattedDurationProps> = (props) => {
  const { value, unitDisplay } = props;

  const positiveValueOrZero = isNaN(value) ? 0 : Math.max(0, value);

  const durationInMinutes = Math.floor(positiveValueOrZero / 1000 / 60);
  const durationHours = Math.floor(durationInMinutes / 60);
  const durationMinutes = durationInMinutes % 60;

  const intl = useIntl();

  const renderHours = (hours: number) =>
    intl.formatNumber(hours, {
      style: 'unit',
      unit: 'hour',
      unitDisplay,
    });

  const renderMinutes = (minutes: number) =>
    intl.formatNumber(minutes, {
      style: 'unit',
      unit: 'minute',
      unitDisplay,
    });

  if (durationHours <= 0 && durationMinutes <= 0) {
    return <>{renderMinutes(durationMinutes)}</>;
  }
  if (durationHours <= 0 && durationMinutes > 0) {
    return <>{renderMinutes(durationMinutes)}</>;
  }
  if (durationHours > 0 && durationMinutes <= 0) {
    return <>{renderHours(durationHours)}</>;
  }

  return <>{intl.formatList([renderHours(durationHours), renderMinutes(durationMinutes)])}</>;
};
