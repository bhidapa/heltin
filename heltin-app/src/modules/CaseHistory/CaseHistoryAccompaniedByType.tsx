/**
 *
 * CaseHistoryAccompaniedByType
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

export enum CaseHistoryAccompaniedByType {
  Family = 'FAMILY',
  Father = 'FATHER',
  Mother = 'MOTHER',
  None = 'NONE',
}

export interface CaseHistoryAccompaniedByTypeSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const CaseHistoryAccompaniedByTypeSelectOptions: React.FC<CaseHistoryAccompaniedByTypeSelectOptionsProps> = React.memo(
  function CaseHistoryAccompaniedByTypeSelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(CaseHistoryAccompaniedByType).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  },
);
