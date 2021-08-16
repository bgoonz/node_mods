/**
 * Calculates a Keyed-Hash Message Authentication Code (HMAC) from a message and a key.
 *
 * @param message
 * @param key
 * @return
 */
export declare function hmac(message: string, key: string): Promise<string>;
