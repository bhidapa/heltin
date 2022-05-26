/**
 *
 * utils
 *
 */
import { IncomingMessage, ServerResponse } from 'http';
import { randomUUID } from 'crypto';

export const REQUEST_ID_HEADER_KEY = 'X-Request-ID';

export function getOrGenRequestId(req: IncomingMessage) {
  const header = req.headers[REQUEST_ID_HEADER_KEY.toLowerCase()] ?? '';
  const requestIds = (
    typeof header === 'string' ? header.split(',') : header
  ).map((p) => p.trim());

  if (requestIds.length > 0 && requestIds[0]) {
    if (requestIds.length > 1) {
      console.warn(
        'Multiple request IDs detected, using first one as the single request ID',
        requestIds,
      );
    }
    return requestIds[0];
  }

  return randomUUID();
}

export function writeInternalError(res: ServerResponse, err: any) {
  const requestId = getOrGenRequestId(res.req);
  const message = 'Internal error ' + requestId || 'unknown';

  res
    .writeHead(500, 'Internal Server Error', {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Length': Buffer.byteLength(message),
      [REQUEST_ID_HEADER_KEY]: requestId,
    })
    .end(message);

  console.error(message, err);
}

export function isPgForbiddenError(err: Error) {
  const msg = err.message.toLowerCase();
  return (
    msg.includes('permission denied') || // role doesnt have sufficient grants
    msg.includes('new row violates row-level security policy') // RLS policy is violated
  );
}
