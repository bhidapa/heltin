/**
 *
 * TherapistTypeSelectOptions
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { TherapistType } from 'enums.graphql';

const types: { [key in TherapistType]: 1 } = {
  CLINICAL_PSYCHOLOGIST: 1,
  DEFECTOLOGIST: 1,
  LOGOPED: 1,
  NEUROLOGIST: 1,
  NEUROPSYCHIATRIST: 1,
  PEDAGOGUE: 1,
  PEDIATRIST: 1,
  PHONETICIAN: 1,
  PSYCHIATRIST: 1,
  PSYCHOLOGIST: 1,
  PSYCHOTHERAPIST: 1,
  SOCIAL_WORKER: 1,
  SUPERVISOR: 1,
  OTHER: 1,
};

const options = Object.entries(types).map(([type]) => (
  <FormattedMessage id={type} key={type}>
    {(text) => <option value={type}>{text}</option>}
  </FormattedMessage>
));

export interface TherapistTypeSelectOptionsProps {
  hideEmptyOption?: boolean;
}

export const TherapistTypeSelectOptions: React.FC<TherapistTypeSelectOptionsProps> = ({
  hideEmptyOption,
}) => (
  <>
    {!hideEmptyOption && <option value="">&mdash;</option>}
    {options}
  </>
);
