import { TokenStorage } from './TokenStorage';
/**
 * @ignore
 */
export declare class WebStorage extends TokenStorage {
    static isAvailable(): boolean;
    /**
     * Creates a global web storage instance for the given origin
     * A web token storage use the localStorage or sessionStorage to store the origin tokens
     * @param origin
     * @return
     */
    static create(origin: string): Promise<WebStorage>;
    /**
     * @inheritDoc
     */
    saveToken(origin: string, token: string | null, temporary: boolean): void;
}
