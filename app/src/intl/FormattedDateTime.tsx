/**
 *
 * FormattedDateTime
 *
 */
import React from 'react';
import { FormattedDate, FormattedTime } from 'react-intl';

export interface FormattedDateTimeProps {
  value: string | number | Date;
}

export const FormattedDateTime: React.FC<FormattedDateTimeProps> = ({ value }) => {
  return (
    <>
      <FormattedDate value={value} />
      &nbsp;
      <FormattedTime value={value} />
    </>
  );
};
