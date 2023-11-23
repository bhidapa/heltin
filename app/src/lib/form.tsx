/**
 *
 * form
 *
 */
import React, { KeyboardEventHandler, useRef } from 'react';
import { Control, FieldPath, FieldPathValue, FieldValues, useWatch } from 'react-hook-form';
import { onCtrlEnter } from './utils';

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

export function submitOnCtrlEnter(
  formRef: React.MutableRefObject<HTMLFormElement | null>,
): KeyboardEventHandler {
  return onCtrlEnter(() => {
    if (formRef.current!.reportValidity()) {
      formRef.current!.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    }
  });
}

/** Manually submit a form with a native submit event. */
export function useNativeFormSubmit(): [
  ref: React.MutableRefObject<HTMLFormElement | null>,
  submit: () => void,
  submitOnCtrlEnter: KeyboardEventHandler,
] {
  const formRef = useRef<HTMLFormElement | null>(null);

  function submit() {
    if (formRef.current!.reportValidity()) {
      formRef.current!.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    }
  }

  return [formRef, submit, onCtrlEnter(submit)];
}
