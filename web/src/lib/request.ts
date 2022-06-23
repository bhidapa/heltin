/**
 *
 * request
 *
 */
import { getReturnTo, location } from 'core/location';

import { genUUID } from './uuid';

export const REQUEST_ID_HEADER_KEY = 'X-Request-ID';

export async function checkResponse(res: Response): Promise<Response> {
  if (res.ok) {
    return res;
  }
  if (res.status === 500) {
    throw new Error(`Internal error ${res.headers.get(REQUEST_ID_HEADER_KEY) || 'unknown'}`);
  }
  if (res.status === 401) {
    // intentionally not using location.navigate for a proper reload
    window.location.href =
      '/logout' +
      location.stringifySearch({
        returnTo: getReturnTo(),
      });
    throw new Error('Unauthorized');
  }
  throw new Error(`${(await res.text()) || res.statusText}`);
}

export function buildHeaders(opts: { contentType?: 'json' | 'text' } = {}) {
  const headers: Record<string, string> = {
    // all fetch requests should offer a request id for tracking logs
    [REQUEST_ID_HEADER_KEY]: genUUID(),
  };

  switch (opts.contentType) {
    case undefined:
      break;
    case 'json':
      headers['Content-Type'] = 'application/json; charset=utf-8';
      break;
    case 'text':
      headers['Content-Type'] = 'text/plain; charset=utf-8';
      break;
    default:
      throw new Error(`Unsupported build headers content type ${opts.contentType}`);
  }

  return headers;
}
