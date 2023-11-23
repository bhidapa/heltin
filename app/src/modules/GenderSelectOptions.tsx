/**
 *
 * GenderSelectOptions
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Gender } from 'enums.graphql';

const types: { [key in Gender]: 1 } = {
  FEMALE: 1,
  MALE: 1,
};

const options = Object.entries(types).map(([type]) => (
  <FormattedMessage id={type} key={type}>
    {(text) => <option value={type}>{text}</option>}
  </FormattedMessage>
));

export interface GenderSelectOptionsProps {
  hideEmptyOption?: boolean;
}

export const GenderSelectOptions: React.FC<GenderSelectOptionsProps> = ({ hideEmptyOption }) => (
  <>
    {!hideEmptyOption && <option value="">&mdash;</option>}
    {options}
  </>
);
