/**
 *
 * CaseHistoryReferralType
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

export enum CaseHistoryReferralType {
  Court = 'COURT',
  Hospital = 'HOSPITAL',
  Kindergarten = 'KINDERGARTEN',
  MentalHealthCenter = 'MENTAL_HEALTH_CENTER',
  Pediatrist = 'PEDIATRIST',
  Police = 'POLICE',
  Psychiatrist = 'PSYCHIATRIST',
  School = 'SCHOOL',
  Self = 'SELF',
  SocialWorkCenter = 'SOCIAL_WORK_CENTER',
  Other = 'OTHER',
}

export interface CaseHistoryReferralTypeSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const CaseHistoryReferralTypeSelectOptions: React.FC<CaseHistoryReferralTypeSelectOptionsProps> =
  React.memo(function CaseHistoryReferralTypeSelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(CaseHistoryReferralType).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  });
