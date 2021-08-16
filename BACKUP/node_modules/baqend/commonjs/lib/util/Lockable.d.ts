/**
 * This base class provides an lock interface to execute exclusive operations
 */
export declare class Lockable {
    private isLocked;
    private readyPromise;
    constructor();
    /**
     * Indicates if there is currently no exclusive operation executed
     * <code>true</code> If no exclusive lock is hold
     */
    get isReady(): boolean;
    /**
     * Waits on the previously requested operation and calls the doneCallback if the operation is fulfilled
     * @param doneCallback The callback which will be invoked when the previously
     * operations on this object is completed.
     * @param failCallback When the lock can't be released caused by a none
     * recoverable error
     * @return A promise which completes successfully, when the previously requested
     * operation completes
     */
    ready(doneCallback?: (this: this) => any, failCallback?: (error: Error) => any): Promise<this>;
    /**
     * Try to aquire an exclusive lock and executes the given callback.
     * @param callback The exclusive operation to execute
     * @param [critical=false] Indicates if the operation is critical. If the operation is critical and the
     * operation fails, then the lock will not be released
     * @return A promise
     * @throws If the lock can't be aquired
     * @protected
     */
    withLock<T>(callback: () => Promise<T>, critical?: boolean): Promise<T>;
}
