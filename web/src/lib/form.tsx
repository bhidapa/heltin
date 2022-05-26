/**
 *
 * form
 *
 */
import React from 'react';
import { Control, FieldPath, FieldPathValue, FieldValues, useWatch } from 'react-hook-form';

/** react-hook-form useWatch but as a component. */
export function Watch<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: {
  control: Control<TFieldValues>;
  name: TFieldName;
  defaultValue?: FieldPathValue<TFieldValues, TFieldName>;
  disabled?: boolean;
  exact?: boolean;
  children: (value: FieldPathValue<TFieldValues, TFieldName>) => React.ReactElement | null;
}): React.ReactElement | null {
  const value = useWatch<TFieldValues, TFieldName>(props);
  return props.children(value);
}
