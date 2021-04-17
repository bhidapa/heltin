/**
 *
 * FormCheckboxField
 *
 */

import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Checkbox, CheckboxProps } from '@domonda/ui';

export interface FormCheckboxFieldProps extends Omit<CheckboxProps, 'name'> {
  path: string;
}

export const FormCheckboxField: React.FC<FormCheckboxFieldProps> = (props) => {
  const { path, ...rest } = props;
  const { control } = useFormContext();
  return (
    <Controller
      name={path}
      control={control}
      render={({ field: { ref, name, value, onChange, onBlur } }) => (
        <Checkbox
          {...rest}
          ref={ref}
          name={name}
          checked={value ?? false}
          onChange={(event) => {
            onChange(event.currentTarget.checked);
            rest.onChange?.(event);
          }}
          onBlur={(event) => {
            onBlur();
            rest.onBlur?.(event);
          }}
        />
      )}
    />
  );
};
