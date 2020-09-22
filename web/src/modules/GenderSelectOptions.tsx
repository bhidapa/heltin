/**
 *
 * GenderSelectOptions
 *
 */

import React from 'react';
import { Gender } from './Gender';
import { FormattedMessage } from 'react-intl';

export { Gender };

export interface GenderSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const GenderSelectOptions: React.FC<GenderSelectOptionsProps> = React.memo(
  function GenderSelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(Gender).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  },
);
