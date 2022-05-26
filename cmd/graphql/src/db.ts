import { Client, Pool } from 'pg';

/** Just a convenience wrapper with TS and smaller niceties. */
export default function db(pool: Client | Pool) {
  return {
    async exec(query: string, ...args: unknown[]): Promise<void> {
      await pool.query(query, args);
    },
    async queryRow<T extends unknown = unknown>(
      query: string,
      ...args: unknown[]
    ): Promise<T | null> {
      const res = await pool.query(query, args);
      return res?.rows?.[0] ?? null;
    },
    async queryRows<T extends unknown = unknown>(
      query: string,
      ...args: unknown[]
    ): Promise<T[]> {
      const res = await pool.query(query, args);
      return res?.rows ?? [];
    },
  };
}
