import { hmac } from '../util';
import type { GlobalStorage } from './GlobalStorage';
import type { WebStorage } from './WebStorage';
export interface TokenData {
    val: any;
    sig: string;
    createdAt: number;
    data: string;
    expireAt: number;
}
export interface TokenStorageFactory {
    /**
     * Creates a new tokenStorage which persist tokens for the given origin
     * @param origin The origin where the token contains to
     * @return The initialized token storage
     */
    create(origin: string): Promise<TokenStorage>;
}
export declare class TokenStorage {
    static GLOBAL: typeof GlobalStorage;
    static WEB_STORAGE: typeof WebStorage;
    static hmac: typeof hmac;
    /**
     * The actual stored token
     */
    tokenData: TokenData | null;
    /**
     * The origin of the token
     */
    origin: string;
    /**
     * Indicates if the token should keep temporary only or should be persisted for later sessions
     */
    temporary: boolean;
    /**
     * Parse a token string in its components
     * @param token The token string to parse, time values are returned as timestamps
     * @return The parsed token data
     */
    static parse(token: string): TokenData;
    /**
     * Get the stored token
     * @return The token or undefined, if no token is available
     */
    get token(): string;
    static create(origin: string): Promise<TokenStorage>;
    /**
     * @param origin The origin where the token belongs to
     * @param token The initial token
     * @param temporary If the token should be saved temporary or permanently
     */
    constructor(origin: string, token?: string | null, temporary?: boolean);
    /**
     * Use the underlying storage implementation to save the token
     * @param origin The origin where the token belongs to
     * @param token The initial token
     * @param temporary If the token should be saved temporary or permanently
     * @return
     */
    protected saveToken(origin: string, token: string | null, temporary: boolean): void;
    /**
     * Use the underlying storage implementation to save the token
     * @param origin The origin where the token belongs to
     * @param token The initial token
     * @param temporary If the token should be saved temporary or permanently
     * @return
     * @deprecated Use TokenStorage#saveToken instead
     * @protected
     */
    protected _saveToken(origin: string, token: string | null, temporary: boolean): void;
    /**
     * Update the token for the givin origin, the operation may be asynchronous
     * @param token The token to store or <code>null</code> to remove the token
     */
    update(token: string | null): void;
    /**
     * Derives a resource token from the stored origin token and signs the resource with the generated resource token
     *
     * @param resource The resource which will be accessible with the returned token
     * @param sign Sign the given resource with a token, if sign is false the resource will only be encoded to a path
     * @return A resource token which can only be used to access the specified resource
     */
    signPath(resource: string, sign?: boolean): Promise<string>;
}
