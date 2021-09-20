/**
 *
 * CaseHistoryReasonOfMultipleAdoptionsType
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

export enum CaseHistoryReasonOfMultipleAdoptionsType {
  Abuse = 'ABUSE',
  LossOfFosterParent = 'LOSS_OF_FOSTER_PARENT',
  Neglection = 'NEGLECTION',
  Other = 'OTHER',
}

export interface CaseHistoryReasonOfMultipleAdoptionsTypeSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const CaseHistoryReasonOfMultipleAdoptionsTypeSelectOptions: React.FC<CaseHistoryReasonOfMultipleAdoptionsTypeSelectOptionsProps> =
  React.memo(function CaseHistoryReasonOfMultipleAdoptionsTypeSelectOptions({
    disableEmptyOption,
  }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(CaseHistoryReasonOfMultipleAdoptionsType).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  });
