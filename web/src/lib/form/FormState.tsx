/**
 *
 * FormState
 *
 */

import React from 'react';
import { useFormContext, FormState as IFormState } from 'react-hook-form';

export interface FormStateProps<V> {
  children: (state: IFormState<V>) => React.ReactElement | null;
}

export function FormState<V = Record<string, any>>(props: FormStateProps<V>) {
  const { children } = props;
  const { formState } = useFormContext<V>();
  return children(formState);
}
