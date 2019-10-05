import { Session } from './session';
import { createSelector } from 'reselect';

const getSessionToken = ({ token }: Pick<Session, 'token'>) => token;

const getSessionExpiresAt = ({ expiresAt }: Pick<Session, 'expiresAt'>) => expiresAt;

export const checkIsAuthorized = createSelector(
  getSessionToken,
  getSessionExpiresAt,
  (token, expiresAt): boolean => (token && new Date().getTime() < (expiresAt || 0)) || false,
);
