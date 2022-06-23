/**
 *
 * store
 *
 */

// private Safari sessions dont have localStorage
export const localStore = window.localStorage || window.sessionStorage;

export const sessionStore = window.sessionStorage;
