/**
 *
 * useFormSubmit
 *
 */
import React, { useRef } from 'react';

/** Manually submit a form with a native submit event. */
export function useFormSubmit(): [
  ref: React.MutableRefObject<HTMLFormElement | null>,
  submit: () => void,
] {
  const formRef = useRef<HTMLFormElement | null>(null);
  return [
    formRef,
    function submit() {
      if (formRef.current!.reportValidity()) {
        formRef.current!.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      }
    },
  ];
}
