/**
 *
 * Form
 *
 */

import React, { useCallback, useRef } from 'react';
import {
  useForm,
  FormProvider,
  UseFormProps,
  UseFormReturn,
  FieldValues,
  SubmitErrorHandler,
  FieldNamesMarkedBoolean,
} from 'react-hook-form';
export { Controller, useFormContext } from 'react-hook-form';
export type { SubmitErrorHandler as FormSubmitErrorHandler, FieldNamesMarkedBoolean };
import { useOnValueChange } from 'lib/useOnValueChange';
import { usePanic } from 'lib/usePanic';

export type FormSubmitHandler<V> = (
  data: V,
  event?: React.BaseSyntheticEvent,
) => Promise<void> | void;

export interface FormProps<V extends Record<string, unknown>>
  extends Omit<UseFormProps<V>, 'defaultValues'> {
  children: ((methods: FormMethods<V>) => React.ReactElement) | React.ReactElement;
  defaultValues: V;
  onSubmit: FormSubmitHandler<V>;
  onError?: SubmitErrorHandler<V>;
  /**
   * Resets the from completely when the default values change.
   * **Important:** `defaultValues` is cached at the first render within the custom hook. To change them, you must reset.
   * @default true
   */
  resetOnDefaultValuesChange?: boolean;
  /**
   * Resets the from completely when the submission was successful
   */
  resetOnSuccessfulSubmit?: boolean;
}

export interface FormMethods<V> extends Omit<UseFormReturn<V>, 'handleSubmit'> {
  form: React.MutableRefObject<HTMLFormElement | null>;
  submit: () => void;
}

export function Form<V extends FieldValues = FieldValues>(props: FormProps<V>): React.ReactElement {
  const {
    children,
    mode = 'onBlur',
    defaultValues,
    onSubmit,
    onError,
    resetOnDefaultValuesChange = true,
    resetOnSuccessfulSubmit,
    ...options
  } = props;
  const [panic] = usePanic();
  const formRef = useRef<HTMLFormElement | null>(null);
  const methods = useForm<V>({
    ...options,
    mode,
    defaultValues: defaultValues as any,
  });
  useOnValueChange(resetOnDefaultValuesChange ? (defaultValues as any) : null, methods.reset); // change the default values when they change
  const submitWithPanic = useCallback<FormSubmitHandler<V>>(
    async (...args) => {
      try {
        await onSubmit(...args);
        if (resetOnSuccessfulSubmit) methods.reset();
      } catch (err) {
        panic(err);
      }
    },
    [onSubmit, resetOnSuccessfulSubmit],
  );
  return (
    <FormProvider {...methods}>
      <form ref={formRef} onSubmit={methods.handleSubmit(submitWithPanic as any, onError)}>
        {typeof children === 'function'
          ? children({
              ...methods,
              form: formRef,
              submit: () => {
                // let there be an exception if you submit on no form
                if (formRef.current!.reportValidity()) {
                  formRef.current!.dispatchEvent(
                    new Event('submit', { bubbles: true, cancelable: true }),
                  );
                }
              },
            })
          : children}
      </form>
    </FormProvider>
  );
}
