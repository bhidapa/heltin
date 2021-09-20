/**
 *
 * CaseHistoryAbuseType
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

export enum CaseHistoryAbuseType {
  AbuseWitness = 'ABUSE_WITNESS',
  Bullying = 'BULLYING',
  CyberBullying = 'CYBER_BULLYING',
  EmotionalAbuse = 'EMOTIONAL_ABUSE',
  Neglection = 'NEGLECTION',
  ParentManipulation = 'PARENT_MANIPULATION',
  PhysicalAbuse = 'PHYSICAL_ABUSE',
  SexualAbuse = 'SEXUAL_ABUSE',
  Other = 'OTHER',
}

export interface CaseHistoryAbuseTypeSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const CaseHistoryAbuseTypeSelectOptions: React.FC<CaseHistoryAbuseTypeSelectOptionsProps> =
  React.memo(function CaseHistoryAbuseTypeSelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(CaseHistoryAbuseType).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  });
