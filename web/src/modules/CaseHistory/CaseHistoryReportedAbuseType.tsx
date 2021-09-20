/**
 *
 * CaseHistoryReportedAbuseType
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

export enum CaseHistoryReportedAbuseType {
  Court = 'COURT',
  NotReported = 'NOT_REPORTED',
  SocialWorkCenter = 'SOCIAL_WORK_CENTER',
}

export interface CaseHistoryReportedAbuseTypeSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const CaseHistoryReportedAbuseTypeSelectOptions: React.FC<CaseHistoryReportedAbuseTypeSelectOptionsProps> =
  React.memo(function CaseHistoryReportedAbuseTypeSelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(CaseHistoryReportedAbuseType).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  });
