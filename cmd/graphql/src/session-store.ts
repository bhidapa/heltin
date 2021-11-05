import { Pool } from "pg";
import { Store, SessionData } from "express-session";

const PRUNE_INTERVAL = 120_000; // 2 minutes

const SCHEMA_NAME = "private";
const TABLE_NAME = "session";
const table = SCHEMA_NAME + '."' + TABLE_NAME + '"';

function now() {
  return new Date();
}

export class SessionStore extends Store {
  private pool: Pool;
  private pruner: NodeJS.Timeout | undefined;

  constructor(pool: Pool) {
    super();
    this.pool = pool;
    setImmediate(() => this.prune());
  }

  async close() {
    if (this.pruner) clearTimeout(this.pruner);
    await this.pool.end();
  }

  private getExpireTime(sess: SessionData) {
    // if the cookie itself has no expire date, expire immediately
    return sess?.cookie?.expires || now();
  }

  private async queryOne<T = unknown>(
    query: string,
    params: unknown[],
    cb?: (err?: unknown, data?: T) => void
  ) {
    let data;
    try {
      const res = await this.pool.query(query, params);
      data = res?.rows?.[0] ?? undefined;
    } catch (err) {
      if (cb) return cb(err);
      else throw err;
    }
    if (cb) cb(undefined, data);
    return data;
  }

  prune() {
    this.queryOne<void>(
      "delete from " + table + " where expire <= $1",
      [now()],
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        this.pruner = setTimeout(() => this.prune(), PRUNE_INTERVAL);
      }
    );
  }

  get(
    sid: string,
    cb: (
      err: unknown | undefined,
      session: SessionData | null | undefined
    ) => void
  ) {
    this.queryOne<{ sess: SessionData }>(
      "select sess from " + table + " where sid = $1 and expire > $2",
      [sid, now()],
      (err, res) => cb(err, res?.sess)
    );
  }

  set(sid: string, sess: SessionData, cb?: (err?: unknown) => void) {
    this.queryOne<void>(
      `insert into ${table} (sess, expire, sid)
          values ($1, $2, $3)
      on conflict (sid) do update
      set sess=$1, expire=$2, updated_at=now()`,
      [sess, this.getExpireTime(sess), sid],
      cb
    );
  }

  destroy(sid: string, cb?: (err?: unknown) => void) {
    this.queryOne<void>("delete from " + table + " where sid = $1", [sid], cb);
  }

  length(cb?: (err: unknown, length: number) => void) {
    this.queryOne<{ len: number }>(
      "select count(1) as len from " + table,
      [],
      (err, res) => cb?.(err, res?.len ?? 0)
    );
  }

  clear(cb?: (err?: unknown) => void) {
    this.queryOne<void>("delete from " + table, [], cb);
  }

  touch(sid: string, sess: SessionData, cb?: (err?: unknown) => void) {
    this.queryOne<void>(
      `update ${table}
        set expire=$1, updated_at=now()
      where sid = $2`,
      [this.getExpireTime(sess), sid],
      cb
    );
  }
}
