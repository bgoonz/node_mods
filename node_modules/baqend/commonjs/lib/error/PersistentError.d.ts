interface PersistentErrorConstructor {
    /**
     * Wraps the given error into a persistent error, if the error is not already an persistent error
     * @param error - The error to wrap
     */
    of(error: Error): PersistentError;
    /**
     * @param message - a error message
     * @param cause - a optional cause of the error
     */
    new (message: string | null, cause?: Error): PersistentError;
}
export interface PersistentError extends Error {
    /**
     * The name of the error
     */
    name: string;
    /**
     * The error message
     */
    message: string;
    /**
     * The error stack trace
     */
    stack?: string;
    /**
     * The error cause
     */
    cause?: Error;
}
export declare const PersistentError: PersistentErrorConstructor;
export {};
