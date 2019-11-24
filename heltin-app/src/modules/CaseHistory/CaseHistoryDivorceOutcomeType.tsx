/**
 *
 * CaseHistoryDivorceOutcomeType
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

export enum CaseHistoryDivorceOutcomeType {
  HighConflict = 'HIGH_CONFLICT',
  LowConflict = 'LOW_CONFLICT',
  MediumConflict = 'MEDIUM_CONFLICT',
  NoConflict = 'NO_CONFLICT',
  Unknown = 'UNKNOWN',
}

export interface CaseHistoryDivorceOutcomeTypeSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const CaseHistoryDivorceOutcomeTypeSelectOptions: React.FC<CaseHistoryDivorceOutcomeTypeSelectOptionsProps> = React.memo(
  function CaseHistoryDivorceOutcomeTypeSelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(CaseHistoryDivorceOutcomeType).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  },
);
