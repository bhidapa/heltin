/**
 *
 * ProfessionalTypeSelectOptions
 *
 */

import React from 'react';
import { ProfessionalType } from './ProfessionalType';
import { FormattedMessage } from 'react-intl';

export { ProfessionalType };

export interface ProfessionalTypeSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const ProfessionalTypeSelectOptions: React.FC<ProfessionalTypeSelectOptionsProps> =
  React.memo(function ProfessionalTypeSelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(ProfessionalType).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  });
