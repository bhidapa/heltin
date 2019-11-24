/**
 *
 * FormFields
 *
 */

import React from 'react';

// Input
import { Input, InputProps } from '@domonda/ui/Input';
import {
  FormInputField as ReactFormInputField,
  FormInputFieldProps,
} from '@domonda/react-form/FormInputField';

export const FormInputField: React.FC<Omit<FormInputFieldProps, 'children'> & InputProps> = ({
  children,
  path,
  required,
  ...rest
}) => (
  <ReactFormInputField path={path} required={required}>
    {({ inputProps, state }) => (
      <Input {...inputProps} {...rest} disabled={state.disabled} readOnly={state.readOnly} />
    )}
  </ReactFormInputField>
);

// Select
import { Select, SelectProps } from '@domonda/ui/Select';
import {
  FormSelectField as ReactFormSelectField,
  FormSelectFieldProps,
} from '@domonda/react-form/FormSelectField';

export const FormSelectField: React.FC<Omit<FormSelectFieldProps, 'children'> & SelectProps> = ({
  children,
  path,
  required,
  ...rest
}) => (
  <ReactFormSelectField path={path} required={required}>
    {({ selectProps, state }) => (
      <Select {...selectProps} {...rest} disabled={state.disabled} readOnly={state.readOnly}>
        {children}
      </Select>
    )}
  </ReactFormSelectField>
);

// Checkbox
import { Checkbox, CheckboxProps } from '@domonda/ui/Checkbox';
import {
  FormCheckboxField as ReactFormCheckboxField,
  FormCheckboxFieldProps,
} from '@domonda/react-form/FormCheckboxField';

export const FormCheckboxField: React.FC<Omit<FormCheckboxFieldProps, 'children'> &
  CheckboxProps> = ({ children, path, required, ...rest }) => (
  <ReactFormCheckboxField path={path} required={required}>
    {({ inputProps, state }) => (
      <Checkbox {...inputProps} {...rest} disabled={state.disabled} readOnly={state.readOnly}>
        {children}
      </Checkbox>
    )}
  </ReactFormCheckboxField>
);

// Array
import { FormField, FormFieldProps } from '@domonda/react-form/FormField';
export const FormArrayField: React.FC<Omit<FormFieldProps<any[] | null | undefined>, 'children'> & {
  children: (props: {
    items: any[];
    add: () => void;
    remove: () => void;
  }) => React.ReactElement | null;
}> = ({ children, ...rest }) => (
  <FormField {...rest}>
    {({ value, setValue }) => {
      let filtered = false;
      const items = (!value || value.length === 0 ? [null] : value).filter((val) => {
        if (val === undefined) {
          filtered = true;
          return false;
        }
        return true;
      });
      if (filtered) {
        setTimeout(() => setValue(items), 0);
      }
      return children({
        items,
        add: () => setValue([...items, null]),
        remove: () => setValue(items.slice(0, -1)),
      });
    }}
  </FormField>
);
