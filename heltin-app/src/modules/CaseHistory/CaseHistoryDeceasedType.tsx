/**
 *
 * CaseHistoryDeceasedType
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

export enum CaseHistoryDeceasedType {
  Brother = 'BROTHER',
  Father = 'FATHER',
  FosterFather = 'FOSTER_FATHER',
  FosterMother = 'FOSTER_MOTHER',
  Mother = 'MOTHER',
  Sister = 'SISTER',
  StepBrother = 'STEP_BROTHER',
  StepFather = 'STEP_FATHER',
  StepMother = 'STEP_MOTHER',
  StepSister = 'STEP_SISTER',
}

export interface CaseHistoryDeceasedTypeSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const CaseHistoryDeceasedTypeSelectOptions: React.FC<CaseHistoryDeceasedTypeSelectOptionsProps> = React.memo(
  function CaseHistoryDeceasedTypeSelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(CaseHistoryDeceasedType).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  },
);
