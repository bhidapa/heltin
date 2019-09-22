/**
 *
 * auth
 *
 */

import { createPlumb } from '@domonda/react-plumb';
import { local } from 'lib/storage';

const TOKEN_STORAGE_KEY = '@heltin/token';

export interface AuthState {
  token: string | null;
}

export const auth = createPlumb<AuthState, undefined>({
  token: local.get(TOKEN_STORAGE_KEY),
});

// store token changes
auth.subscribe(({ token }) => {
  if (token) {
    local.set(TOKEN_STORAGE_KEY, token);
  } else {
    local.remove(TOKEN_STORAGE_KEY);
  }
});

export function logout() {
  auth.next({ token: null }, undefined);
}

export function login(token: string) {
  auth.next({ token }, undefined);
}
