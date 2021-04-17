/**
 *
 * FormSelectField
 *
 */

import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Select, SelectProps } from '@domonda/ui';

export interface FormSelectFieldProps extends Omit<SelectProps, 'name'> {
  path: string;
}

export const FormSelectField: React.FC<FormSelectFieldProps> = (props) => {
  const { children, path, defaultValue, ...rest } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={path}
      defaultValue={defaultValue}
      control={control}
      render={({ field: { ref, name, value, onChange, onBlur } }) => (
        <Select
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
        >
          {children}
        </Select>
      )}
    />
  );
};
