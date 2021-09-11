import { PersistentError } from './PersistentError';
export declare class RollbackError extends PersistentError {
    constructor(cause: Error);
}
