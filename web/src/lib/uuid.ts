/**
 *
 * uuid
 *
 */

/**
 * Generates a v4 UUID to be used as the ID using `crypto`
 * as the random number generator.
 *
 * Reference: https://www.measurethat.net/Benchmarks/Show/8781/0/uuid-v4-crypto-vs-math
 */
export function genUUID(): UUID {
  let bytes = crypto.getRandomValues(new Uint8Array(32));
  const randomBytes = () => (bytes = bytes.slice(1)) && bytes[0];
  return (
    // @ts-expect-error: "+" can be applied
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: string) =>
      // @ts-expect-error: string will be converted to number
      (c ^ (randomBytes() & (15 >> (c / 4)))).toString(16),
    )
  );
}

/** Checks if the passed string is a valid v4 UUID. */
export function isUUID(str: unknown): str is UUID {
  const reg = new RegExp(
    '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$',
    'i',
  );
  return typeof str === 'string' && reg.test(str);
}

/** Checks if the passed string is a valid v4 UUID and returns it, otherwise returns the empty UUID. */
export function uuidOrEmpty(str: unknown): UUID {
  return isUUID(str) ? str : '00000000-0000-0000-0000-000000000000';
}
