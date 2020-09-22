/**
 *
 * CaseHistoryLivesWithType
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

export enum CaseHistoryLivesWithType {
  Alone = 'ALONE',
  Aunt = 'AUNT',
  Brother = 'BROTHER',
  Cousin = 'COUSIN',
  Father = 'FATHER',
  FosterFather = 'FOSTER_FATHER',
  FosterHouse = 'FOSTER_HOUSE',
  FosterMother = 'FOSTER_MOTHER',
  Grandfather = 'GRANDFATHER',
  Grandmother = 'GRANDMOTHER',
  Mother = 'MOTHER',
  Sister = 'SISTER',
  StepBrother = 'STEP_BROTHER',
  StepFather = 'STEP_FATHER',
  StepMother = 'STEP_MOTHER',
  StepSister = 'STEP_SISTER',
  Uncle = 'UNCLE',
}

export interface CaseHistoryLivesWithTypeSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const CaseHistoryLivesWithTypeSelectOptions: React.FC<CaseHistoryLivesWithTypeSelectOptionsProps> = React.memo(
  function CaseHistoryLivesWithTypeSelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(CaseHistoryLivesWithType).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  },
);
