/**
 *
 * storage
 *
 * Represents the offline broswer store. Can either be `local` or `session`.
 *
 */

import engine from 'store/src/store-engine';
import localStorage from 'store/storages/localStorage';
import sessionStorage from 'store/storages/sessionStorage';

/** Local storage stores data locally in the browser to be accessed on domain level. */
export const local = engine.createStore(localStorage);

/** Session storage stores data locally in the browser to be accessed per browser tab or session. */
export const session = engine.createStore(sessionStorage);

/** Clears everything from both `local` and `session` storage. */
export function clearAll() {
  local.clearAll();
  session.clearAll();
}
