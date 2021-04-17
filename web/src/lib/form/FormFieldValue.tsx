/**
 *
 * FormFieldValue
 *
 */

import React from 'react';
import { useFormContext, useWatch, SetValueConfig } from 'react-hook-form';

export interface FormFieldValueMethods<T> {
  value?: T;
  getValue: () => T;
  setValue: (value: T, options?: SetValueConfig) => void;
}

export function useFormFieldValue<T = unknown>(path: string): FormFieldValueMethods<T> {
  const value = useWatch({ name: path });
  const { setValue, getValues } = useFormContext();
  return {
    value: value as T,
    getValue: () => getValues(path),
    setValue: (value) => {
      setValue(path, value as unknown);
    },
  };
}

export interface FormFieldValueProps<T> {
  path: string;
  children: (methods: FormFieldValueMethods<T>) => React.ReactElement | null;
}

export function FormFieldValue<T = unknown>(
  props: FormFieldValueProps<T>,
): React.ReactElement | null {
  const { children, path } = props;
  const methods = useFormFieldValue(path as any);
  return children(methods as any);
}
