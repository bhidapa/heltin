import { Session } from './session';
import { local } from 'lib/storage';

export const SESSION_STORAGE_KEY = '@relay/session';
export const RETURN_TO_STORAGE_KEY = '@heltin/returnTo';

export function loadSession(): Session | null {
  return local.get(SESSION_STORAGE_KEY, null);
}

export function saveSession(session: Session | null) {
  if (session) {
    local.set(SESSION_STORAGE_KEY, session);
  } else {
    local.remove(SESSION_STORAGE_KEY);
  }
}

export function loadReturnTo(): string | null {
  return local.get(RETURN_TO_STORAGE_KEY, null);
}

export function saveReturnTo(returnTo: string | null) {
  if (returnTo) {
    local.set(RETURN_TO_STORAGE_KEY, returnTo);
  } else {
    local.remove(RETURN_TO_STORAGE_KEY);
  }
}
