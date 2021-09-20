/**
 *
 * CaseStudyConclusionType
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

export enum CaseStudyConclusionType {
  TreatmentCompletion = 'TREATMENT_COMPLETION',
  CancellationByClient = 'CANCELLATION_BY_CLIENT',
  CancellationByParent = 'CANCELLATION_BY_PARENT',
  FurtherReferral = 'FURTHER_REFERRAL',
}

export interface CaseStudyConclusionTypeSelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const CaseStudyConclusionTypeSelectOptions: React.FC<CaseStudyConclusionTypeSelectOptionsProps> =
  React.memo(function CaseStudyConclusionTypeSelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(CaseStudyConclusionType).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  });
