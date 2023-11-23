/**
 *
 * CaseStudyConclusionTypeOptions
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { CaseStudyConclusionType } from 'enums.graphql';

const types: { [key in CaseStudyConclusionType]: 1 } = {
  TREATMENT_COMPLETION: 1,
  FURTHER_REFERRAL: 1,
  CANCELLATION_BY_CLIENT: 1,
  CANCELLATION_BY_PARENT: 1,
};

const options = Object.entries(types).map(([type]) => (
  <FormattedMessage id={type} key={type}>
    {(text) => <option value={type}>{text}</option>}
  </FormattedMessage>
));

export interface CaseStudyConclusionTypeOptionsProps {
  hideEmptyOption?: boolean;
}

export const CaseStudyConclusionTypeOptions: React.FC<CaseStudyConclusionTypeOptionsProps> = ({
  hideEmptyOption,
}) => (
  <>
    {!hideEmptyOption && <option value="">&mdash;</option>}
    {options}
  </>
);
