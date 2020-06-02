/* eslint-disable react/no-multi-comp */
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
  transformer,
  ...rest
}) => (
  <ReactFormInputField path={path} required={required} transformer={transformer}>
    {({ inputProps, state }) => (
      <Input {...inputProps} disabled={state.disabled} readOnly={state.readOnly} {...rest} />
    )}
  </ReactFormInputField>
);

// TextArea
import { TextArea, TextAreaProps } from '@domonda/ui/TextArea';
import {
  FormTextAreaField as ReactFormTextAreaField,
  FormTextAreaFieldProps,
} from '@domonda/react-form/FormTextAreaField';

export const FormTextAreaField: React.FC<
  Omit<FormTextAreaFieldProps, 'children'> & TextAreaProps
> = ({ children, path, required, transformer, ...rest }) => (
  <ReactFormTextAreaField path={path} required={required} transformer={transformer}>
    {({ textAreaProps, state }) => (
      <TextArea {...textAreaProps} disabled={state.disabled} readOnly={state.readOnly} {...rest} />
    )}
  </ReactFormTextAreaField>
);

// NumberInput
import {
  FormNumberField as ReactFormNumberField,
  FormNumberFieldProps,
} from '@domonda/react-form/FormNumberField';

export const FormNumberField: React.FC<Omit<FormNumberFieldProps, 'children'> & InputProps> = ({
  children,
  // NumberField
  path,
  required,
  transformer,
  scale,
  signed,
  thousandsSeparator,
  padFractionalZeros,
  normalizeZeros,
  radix,
  mapToRadix,
  min,
  max,
  // Input
  ...rest
}) => (
  <ReactFormNumberField
    path={path}
    required={required}
    transformer={transformer}
    scale={scale !== undefined ? scale : 2} // default 2 decimal positions
    signed={signed !== undefined ? signed : false} // disallow negative values by default
    thousandsSeparator={thousandsSeparator !== undefined ? thousandsSeparator : '.'}
    padFractionalZeros={thousandsSeparator !== undefined ? padFractionalZeros : false}
    normalizeZeros={normalizeZeros !== undefined ? normalizeZeros : true}
    radix={radix !== undefined ? radix : '.'} // default decimal separator is comma
    mapToRadix={mapToRadix !== undefined ? mapToRadix : [',']} // dots might be a decimal separator
    min={min}
    max={max}
  >
    {({ inputProps, state }) => (
      <Input {...inputProps} disabled={state.disabled} readOnly={state.readOnly} {...rest} />
    )}
  </ReactFormNumberField>
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
  transformer,
  ...rest
}) => (
  <ReactFormSelectField path={path} required={required} transformer={transformer}>
    {({ selectProps, state }) => (
      <Select {...selectProps} disabled={state.disabled} readOnly={state.readOnly} {...rest}>
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

export const FormCheckboxField: React.FC<
  Omit<FormCheckboxFieldProps, 'children'> & CheckboxProps
> = ({ children, path, required, transformer, ...rest }) => (
  <ReactFormCheckboxField path={path} required={required} transformer={transformer}>
    {({ inputProps, state }) => (
      <Checkbox {...inputProps} disabled={state.disabled} readOnly={state.readOnly} {...rest}>
        {children}
      </Checkbox>
    )}
  </ReactFormCheckboxField>
);
