/**
 *
 * FormInputField
 *
 */

import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Input, InputProps } from '@domonda/ui';

export interface FormInputFieldProps extends Omit<InputProps, 'name'> {
  path: string;
}

export const FormInputField: React.FC<FormInputFieldProps> = (props) => {
  const { path, defaultValue, ...rest } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={path}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { ref, name, value, onChange, onBlur } }) => (
        <Input
          {...rest}
          ref={ref}
          name={name}
          value={value ?? ''}
          onChange={(event) => {
            onChange(event.currentTarget.value || null); // '' = null
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
