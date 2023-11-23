/**
 *
 * session
 *
 * Use cookies for sessions.
 *
 * Inspired by:
 *   - https://github.com/expressjs/session
 *   - https://github.com/tj/node-cookie-signature
 *
 */
import { IncomingMessage, ServerResponse } from 'http';
import { randomUUID, createHmac, timingSafeEqual } from 'crypto';
import { parse as parseCookie, serialize as serializeCookie } from 'cookie';
import { Pool } from 'pg';
import db from './db';

export type SessionID = string;

export interface Session {
  readonly id: SessionID;
  readonly userId: string;
  readonly cookie: SessionCookie;
  // TODO: store session metadata in the `data` field. stuff like client IP, user-agent, etc.
  // readonly data: unknown;
}

export interface SessionCookie {
  readonly path: string;
  readonly domain: string;
  /** Allowed only on HTTPS (secure) requests. */
  readonly secure: boolean;
  /** Duration in seconds of when should the cookie expire relative to the client's receival time. */
  readonly maxAge: number;
  /** Cookies with the HttpOnly flag are not readable by JavaScript executing in user's browser. */
  readonly httpOnly: boolean;
  readonly sameSite: 'strict' | 'lax' | 'none';
}

export interface SessionState {
  /**
   * Session for the current request.
   *
   * Is null if anonymous or unauthenticated.
   */
  readonly session: Session | null;
  /**
   * Sets the session for the user identified through the current request and
   * updates the storage with necessary data.
   *
   * Returned string is the session ID.
   */
  readonly updateSession: (
    userId: string,
    /** Preferred session ID. Mostly used internally. */
    sessionId?: string,
  ) => Promise<SessionID>;
  /**
   * Delete the current sesson related to the user identified through the request.
   *
   * Returns true when there was a session to destroy in the first place.
   */
  readonly deleteSession: () => Promise<boolean>;
  /**
   * Delete all sessons related to the user identified through the current request.
   *
   * Returns true when there were sessions destroyed.
   */
  readonly deleteAllSessions: (excludeThisSession?: true) => Promise<boolean>;
}

export type IncomingMessageWithSession = IncomingMessage & SessionState;

export interface CreateSessionProps {
  /** The Postgres database pool connection used for storage. */
  pgPool: Pool;
  /** Session encryption secret. */
  secret: string;
  /**
   * When the server is running behind a proxy, useful infromation will be
   * through the X-Forwarded-* headers. Use this flag to trust them.
   */
  trustProxy?: boolean;
  /** Cookie properties. */
  cookie: {
    /** Cookie name where the session will be stored. */
    name: string;
    /**
     * Specifies the value for the cookie domain attribute.
     *
     * @default ''
     */
    domain?: string;
    /**
     * Sets the `Path` cookie attribute that indicates which URL path that must exist in the requested URL in order to send the Cookie header.
     *
     * @default '/'
     */
    path?: string;
    /**
     * Should the cookie be allowed only on HTTPS (secure) request?
     *
     * Read more: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies
     *
     * @default false
     */
    secure?: boolean;
    /**
     * Duration in **seconds** of when should the cookie expire relative to the current time.
     *
     * @default '1 day'
     */
    maxAge?: number;
    /**
     * Cookies with the HttpOnly flag are not readable by JavaScript executing in user's browser.
     *
     * @default true
     */
    httpOnly?: boolean;
    /**
     * Declare if your cookie should be restricted to a first-party or same-site context.
     *
     * @default lax
     */
    sameSite?: 'strict' | 'lax' | 'none';
  };
}

/**
 * Creates a session handler middleware.
 *
 * Use the returned function to build the session into the request.
 *
 * Cookies are **rolling**; meaning, they update on every request,
 * restarting the expiry time so that it gets prolonged.
 */
export function createSession(props: CreateSessionProps) {
  const {
    pgPool,
    secret,
    trustProxy,
    cookie: {
      name: cookieName,
      secure = false,
      path: cookieExpectedPath = '/',
      domain = '',
      maxAge = 24 * 60 * 60, // 1 day in seconds
      httpOnly = true,
      sameSite = 'lax',
    },
  } = props;

  // checks and gets rid of all expired sessions on startup and every 2 minutes
  async function deleteExpiredSessions() {
    try {
      await db(pgPool).exec(
        `delete from private.session where expires_at <= $1`,
        new Date(),
      );
    } catch (err) {
      console.error('Error while pruning expired sessions', err);
    }
  }
  deleteExpiredSessions();
  setInterval(deleteExpiredSessions, 120_000);

  /**
   * Validate and set the session up for the given request.
   *
   * The function will never throw. All errors are caught
   * and responded with a Internal Server Error containing
   * the relevant request ID.
   *
   * Don't forget to check if `res.writable`.
   */
  return async function session(
    req: IncomingMessage,
    res: ServerResponse,
  ): Promise<IncomingMessageWithSession> {
    const reqs = prepareSession(req, {
      session: null,
      deleteSession: async () => {
        if (!reqs.session) {
          return false;
        }

        await db(pgPool).exec(
          `delete from private.session where id = $1`,
          reqs.session.id,
        );

        // we expect no other cookies coming from graphql
        res.removeHeader('Set-Cookie');

        // @ts-expect-error: I can write
        reqs.session = null;
        // @ts-expect-error: I can write
        reqs.cookie = null;

        return true;
      },
      deleteAllSessions: async (excludeMe) => {
        if (!reqs.session) return false;

        const rows = await db(pgPool).queryRows(
          `delete from private.session
          where user_id = $1
          and ($2 is null
            or $2 <> id)
          returning 1`,
          reqs.session.userId,
          excludeMe ? reqs.session.id : null,
        );
        return rows.length > 0;
      },
      updateSession: async (userId, sessionId) => {
        sessionId = sessionId ?? reqs.session?.id ?? randomUUID();

        const cookie: SessionCookie = {
          path: cookieExpectedPath,
          domain,
          secure,
          maxAge,
          httpOnly,
          sameSite,
        };

        const result = await db(pgPool).queryRow<{ id: string }>(
          `insert into private.session (id, user_id, cookie, expires_at)
          values ($1, $2, $3, $4)
          on conflict (id) do update
            set
              cookie=$3,
              expires_at=$4,
              updated_at=now()
          returning id`,
          sessionId,
          userId,
          cookie,
          new Date(
            Date.now() +
              // convert seconds to milliseconds
              maxAge * 1000,
          ).toISOString(),
        );
        if (sessionId !== result?.id) {
          throw new Error('Session not saved');
        }

        // we expect no other cookies coming from graphql
        res.setHeader('Set-Cookie', [
          serializeCookie(cookieName, sign(sessionId, secret), cookie),
        ]);

        // only after everything succeded, set the session for the request
        // @ts-expect-error: I can write
        reqs.session = {
          id: sessionId,
          userId,
          cookie,
        };

        return sessionId;
      },
    });

    const isSecure = (() => {
      if (
        reqs.socket &&
        // @ts-expect-error: when socket is tlsSocket, the encrypted property exists (see https://nodejs.org/api/tls.html#tls_tlssocket_encrypted)
        reqs.socket.encrypted
      ) {
        return true;
      }

      // not encrypted and dont trust proxy
      if (!trustProxy) {
        return false;
      }

      // trusting proxy, read the protocol header
      return (
        reqs.headers['x-forwarded-proto'] === 'https' ||
        // should never be the case, a signle x-forwaded-proto value is expected
        // see https://developer.mozilla.org/docs/Web/HTTP/Headers/X-Forwarded-Proto
        (Array.isArray(reqs.headers['x-forwarded-proto']) &&
          reqs.headers['x-forwarded-proto'].includes('https'))
      );
    })();

    // secure property requires secure connections
    if (secure && !isSecure) {
      return reqs;
    }

    // request path must begin with the expected cookie path
    const url = new URL(reqs.url ?? '', 'http://localhost/');
    const reqPath = url.pathname || '/';
    if (reqPath.indexOf(cookieExpectedPath) !== 0) {
      return reqs;
    }

    // parse and extract the relevant signed cookie value
    const signedMessage = (
      reqs.headers.cookie ? parseCookie(reqs.headers.cookie) : {}
    )[cookieName];
    if (!signedMessage) {
      return reqs;
    }

    // make sure the cookie was originally signed by us
    const sessionId = validateSignature(signedMessage, secret);
    if (!sessionId) {
      return reqs;
    }

    const result = await db(pgPool).queryRow<{
      user_id: string;
      expires_at: number;
      disabled: boolean;
    }>(
      `select session.user_id, session.expires_at, "user".disabled
      from private.session
        inner join private.user on "user".id = session.user_id
      where session.id = $1`,
      sessionId,
    );
    if (!result) {
      return reqs;
    }

    // get rid of expired, and disabled users, sessions right away
    if (result.disabled || Date.now() > result.expires_at) {
      await db(pgPool).exec(
        `delete from private.session where id = $1`,
        sessionId,
      );
      return reqs;
    }

    // set the cookie, session and store again because we're using rolling cookies
    await reqs.updateSession(result.user_id, sessionId);
    return reqs;
  };
}

function prepareSession(
  res: IncomingMessage | IncomingMessageWithSession,
  state: SessionState,
) {
  for (const [key, val] of Object.entries(state)) {
    // @ts-expect-error that's ok
    res[key] = val;
  }
  return res as IncomingMessageWithSession;
}

/**
 * Sign the cookie by calculating the HMAC digest in base64
 * and returning the message in format "<value>.<signature>".
 *
 * Reference: https://github.com/tj/node-cookie-signature/blob/7deca8b38110a3bd65841c34359794706cc7c60f/index.js#L16-L24
 */
function sign(value: string, secret: string): string {
  return (
    value +
    '.' +
    createHmac('sha256', secret)
      .update(value)
      .digest('base64')
      .replace(/\=+$/, '') // strip equal signs
  );
}

/**
 * Validate the cookie signature message and return the signed value.
 * Returns `null` if invalid.
 *
 * Reference: https://github.com/tj/node-cookie-signature/blob/7deca8b38110a3bd65841c34359794706cc7c60f/index.js#L36-L47
 */
function validateSignature(signed: string, secret: string): string | null {
  const signedBuf = Buffer.from(signed),
    // signed message is in format "<value>.<signature>", take the value
    tentativeVal = signed.slice(0, signed.lastIndexOf('.')),
    // sign the tentative value again to compare
    resignedValBuf = Buffer.from(sign(tentativeVal, secret));

  // valid if resigned message is equal to the original signed message compared with
  // an algorithm sutable for HMAC digests (which is what we use for signing)
  return resignedValBuf.length === signedBuf.length &&
    timingSafeEqual(resignedValBuf, signedBuf)
    ? tentativeVal
    : null;
}
