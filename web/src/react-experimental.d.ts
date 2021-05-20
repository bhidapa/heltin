/** React experimental */
/// <reference types="react-dom/experimental" />
/// <reference types="react/experimental" />

/**
 * Patch useTransition tuple switch types due to: https://github.com/facebook/react/pull/20976.
 * Waiting for: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/52529
 */
import { unstable_startTransition, TransitionStartFunction } from 'react';
declare module 'react' {
  export function useTransition(): [boolean, TransitionStartFunction];
}

import { unstable_createRoot, RootOptions, Root } from 'react-dom';
declare module 'react-dom' {
  function createRoot(
    container: Element | Document | DocumentFragment | Comment,
    options?: RootOptions,
  ): Root;
}
