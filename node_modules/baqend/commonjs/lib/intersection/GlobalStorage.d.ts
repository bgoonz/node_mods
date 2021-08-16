import { TokenStorage } from './TokenStorage';
export declare class GlobalStorage extends TokenStorage {
    private static tokens;
    /**
     * Creates a global token storage instance for the given origin
     * A global token storage use a global variable to store the actual origin tokens
     * @param origin
     * @return
     */
    static create(origin: string): Promise<GlobalStorage>;
    /**
     * @inheritDoc
     */
    saveToken(origin: string, token: string, temporary: boolean): void;
}
