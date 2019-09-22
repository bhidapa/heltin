import { AuthState } from './auth';

export const deriveIsLoggedIn = ({ token }: AuthState) => !!token;
