/**
 *
 * CaseHistoryIndividualType
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

export enum CaseHistoryIndividualType {
  Aunt = 'AUNT',
  Brother = 'BROTHER',
  Cousin = 'COUSIN',
  Father = 'FATHER',
  FosterFather = 'FOSTER_FATHER',
  FosterMother = 'FOSTER_MOTHER',
  Friend = 'FRIEND',
  Grandfather = 'GRANDFATHER',
  Grandmother = 'GRANDMOTHER',
  Lover = 'LOVER',
  Mother = 'MOTHER',
  Sister = 'SISTER',
  StepBrother = 'STEP_BROTHER',
  StepFather = 'STEP_FATHER',
  StepMother = 'STEP_MOTHER',
  StepSister = 'STEP_SISTER',
  Uncle = 'UNCLE',
}

export interface CaseHistoryIndividualTypeSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const CaseHistoryIndividualTypeSelectOptions: React.FC<CaseHistoryIndividualTypeSelectOptionsProps> =
  React.memo(function CaseHistoryIndividualTypeSelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(CaseHistoryIndividualType).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  });
