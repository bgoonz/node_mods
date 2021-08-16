import type { EntityManager } from '../EntityManager';
import { JsonMap } from '../util';
export declare type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error';
/**
 * A Logger to store log notes when running the app.
 */
export declare class Logger {
    static readonly LEVELS: LogLevel[];
    static readonly FORMAT_REGEXP: RegExp;
    entityManager: EntityManager;
    levelIndex: number;
    /**
     * Creates a Logger instance for the given EntityManager
     * @param entityManager - Theo owning entityManager
     * @return The created logger instance
     */
    static create(entityManager: EntityManager): Logger;
    /**
     * The log level which will be logged
     *
     * The log level can be one of 'trace', 'debug', 'info', 'warn', 'error'
     * @type string
     */
    get level(): LogLevel;
    /**
     * Sets the log level which will be logged
     * @param value
     */
    set level(value: LogLevel);
    /**
     * Logs a message in the default level 'info'
     * @param message The message to log, the message string can be interpolated like the node util.format method
     * @param args The arguments used to interpolated the message string. The last param can be object which will
     * be included in the log entry
     *
     * @see https://nodejs.org/api/util.html#util_util_format_format
     *
     * @return A promise which resolves when the log messages was logged, or null if the log level has
     * skipped the message
     */
    log(message: string, ...args: any[]): Promise<any>;
    /**
     * Logs a message in the default level 'info'
     * @param message The message to log, the message string can be interpolated like the node util.format method
     * @param [data=null] An optional object which will be included in the log entry
     *
     * @see https://nodejs.org/api/util.html#util_util_format_format
     *
     * @return A promise which resolves when the log messages was logged, or null if the log level has
     * skipped the message
     */
    log(message: string, data: any): Promise<any>;
    /**
     * Logs a message with the given log level
     * @param level The level used to log the message
     * @param message The message to log, the message string can be interpolated like the node util.format method
     * @param args The arguments used to interpolated the message string. The last param can be object which will
     * be included in the log entry
     *
     * @see https://nodejs.org/api/util.html#util_util_format_format
     *
     * @return A promise which resolves when the log messages was logged, or null if the log level has
     * skipped the message
     */
    log(level: string, message: string, ...args: any[]): Promise<any>;
    /**
     * Logs a message with the given log level
     * @param level The level used to log the message
     * @param message The message to log, the message string can be interpolated like the node util.format method
     * @param [data=null] An optional object which will be included in the log entry
     *
     * @see https://nodejs.org/api/util.html#util_util_format_format
     *
     * @return A promise which resolves when the log messages was logged, or null if the log level has
     * skipped the message
     */
    log(level: string, message: string, data: any): Promise<any>;
    format(message: string, args: any): string;
    init(entityManager: EntityManager): void;
    logJSON(json: JsonMap): Promise<any>;
}
export interface Logger {
    /**
     * Log message at trace level
     * @param message The message to log, the message string can be interpolated like the node util.format method
     * @param args The arguments used to interpolated the message string. The last param can be object which will
     * be included in the log entry
     * @return A promise which resolves when the log messages was logged, or null if the log level has
     * skipped the message
     * @function trace
     * @memberOf util.Logger.prototype
     *
     * @see https://nodejs.org/api/util.html#util_util_format_format
     */
    trace(message: string, ...args: any[]): Promise<any>;
    /**
     * Log message at trace level
     * @param message The message to log, the message string can be interpolated like the node util.format method
     * @param [data=null] An optional object which will be included in the log entry
     * @return A promise which resolves when the log messages was logged, or null if the log level has
     * skipped the message
     * @function trace
     * @memberOf util.Logger.prototype
     *
     * @see https://nodejs.org/api/util.html#util_util_format_format
     */
    trace(message: string, data: any): Promise<any>;
    /**
     * Log message at debug level
     * @param message The message to log, the message string can be interpolated like the node util.format method
     * @param args The arguments used to interpolated the message string. The last param can be object which will
     * be included in the log entry
     * @return A promise which resolves when the log messages was logged, or null if the log level has
     * skipped the message
     * @function debug
     * @memberOf util.Logger.prototype
     *
     * @see https://nodejs.org/api/util.html#util_util_format_format
     */
    debug(message: string, ...args: any[]): Promise<any>;
    /**
     * Log message at debug level
     * @param message The message to log, the message string can be interpolated like the node util.format method
     * @param [data=null] An optional object which will be included in the log entry
     * @return A promise which resolves when the log messages was logged, or null if the log level has
     * skipped the message
     * @function debug
     * @memberOf util.Logger.prototype
     *
     * @see https://nodejs.org/api/util.html#util_util_format_format
     */
    debug(message: string, data: any): Promise<any>;
    /**
     * Log message at info level
     * @param message The message to log, the message string can be interpolated like the node util.format method
     * @param args The arguments used to interpolated the message string. The last param can be object which will
     * be included in the log entry
     * @return A promise which resolves when the log messages was logged, or null if the log level has
     * skipped the message
     * @function info
     * @memberOf util.Logger.prototype
     *
     * @see https://nodejs.org/api/util.html#util_util_format_format
     */
    info(message: string, ...args: any[]): Promise<any>;
    /**
     * Log message at info level
     * @param message The message to log, the message string can be interpolated like the node util.format method
     * @param [data=null] An optional object which will be included in the log entry
     * @return A promise which resolves when the log messages was logged, or null if the log level has
     * skipped the message
     * @function info
     * @memberOf util.Logger.prototype
     *
     * @see https://nodejs.org/api/util.html#util_util_format_format
     */
    info(message: string, data: any): Promise<any>;
    /**
     * Log message at warn level
     * @param message The message to log, the message string can be interpolated like the node util.format method
     * @param args The arguments used to interpolated the message string. The last param can be object which will
     * be included in the log entry
     * @return A promise which resolves when the log messages was logged, or null if the log level has
     * skipped the message
     * @function warn
     * @memberOf util.Logger.prototype
     *
     * @see https://nodejs.org/api/util.html#util_util_format_format
     */
    warn(message: string, ...args: any[]): Promise<any>;
    /**
     * Log message at warn level
     * @param message The message to log, the message string can be interpolated like the node util.format method
     * @param [data=null] An optional object which will be included in the log entry
     * @return A promise which resolves when the log messages was logged, or null if the log level has
     * skipped the message
     * @function warn
     * @memberOf util.Logger.prototype
     *
     * @see https://nodejs.org/api/util.html#util_util_format_format
     */
    warn(message: string, data: any): Promise<any>;
    /**
     * Log message at error level
     * @param message The message to log, the message string can be interpolated like the node util.format method
     * @param args The arguments used to interpolated the message string. The last param can be object which will
     * be included in the log entry
     * @return A promise which resolves when the log messages was logged, or null if the log level has
     * skipped the message
     * @function error
     * @memberOf util.Logger.prototype
     *
     * @see https://nodejs.org/api/util.html#util_util_format_format
     */
    error(message: string, ...args: any[]): Promise<any>;
    /**
     * Log message at error level
     * @param message The message to log, the message string can be interpolated like the node util.format method
     * @param [data=null] An optional object which will be included in the log entry
     * @return A promise which resolves when the log messages was logged, or null if the log level has
     * skipped the message
     * @function error
     * @memberOf util.Logger.prototype
     *
     * @see https://nodejs.org/api/util.html#util_util_format_format
     */
    error(message: string, data: any): Promise<any>;
}
