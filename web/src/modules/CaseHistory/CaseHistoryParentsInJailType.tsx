/**
 *
 * CaseHistoryParentsInJailType
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

export enum CaseHistoryParentsInJailType {
  Father = 'FATHER',
  FatherAndMother = 'FATHER_AND_MOTHER',
  Mother = 'MOTHER',
}

export interface CaseHistoryParentsInJailTypeSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const CaseHistoryParentsInJailTypeSelectOptions: React.FC<CaseHistoryParentsInJailTypeSelectOptionsProps> =
  React.memo(function CaseHistoryParentsInJailTypeSelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(CaseHistoryParentsInJailType).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  });
