/**
 *
 * session/auth
 *
 */

import jwtDecode from 'jwt-decode';
import { setSession } from './session';
import { session } from 'lib/storage';

export interface DecodedJWTToken {
  iss: 'postgraphile';
  aud: 'postgraphile';
  exp: number;
  iat: number;
  role: string;
  sub: UUID;
}

export function decodeJwtToken(jwtToken: string) {
  return jwtDecode<DecodedJWTToken>(jwtToken);
}

export function handleJwtToken(jwtToken: string) {
  const { exp } = decodeJwtToken(jwtToken);
  setSession({
    token: jwtToken,
    expiresAt: exp * 1000, // convert seconds to miliseconds
  });
}

export function logout() {
  setSession(null);
  session.clearAll();
}
