"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultQueryExecutor = exports.wrapQueryExecutorWithQueue = exports.createNetworkQueryExecutor = void 0;
const p_queue_1 = __importDefault(require("p-queue"));
const node_fetch_1 = __importDefault(require("node-fetch"));
function createNetworkQueryExecutor(uri, fetchOptions = {}) {
    return async function execute(args) {
        const { query, variables, operationName } = args;
        return node_fetch_1.default(uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query, variables, operationName }),
            ...fetchOptions,
        }).then(res => res.json());
    };
}
exports.createNetworkQueryExecutor = createNetworkQueryExecutor;
/**
 * Takes existing query `executor` function and creates a new
 * function with the same signature that runs with given
 * concurrency level (`10` by default).
 *
 * See p-queue library docs for all available `queueOptions`
 */
function wrapQueryExecutorWithQueue(executor, queueOptions = { concurrency: 10 }) {
    const queryQueue = new p_queue_1.default(queueOptions);
    return async function executeQueued(args) {
        return await queryQueue.add(() => executor(args));
    };
}
exports.wrapQueryExecutorWithQueue = wrapQueryExecutorWithQueue;
/**
 * Creates default query executor suitable for sourcing config
 */
function createDefaultQueryExecutor(uri, fetchOptions, queueOptions = { concurrency: 10 }) {
    const executor = createNetworkQueryExecutor(uri, fetchOptions);
    return wrapQueryExecutorWithQueue(executor, queueOptions);
}
exports.createDefaultQueryExecutor = createDefaultQueryExecutor;
//# sourceMappingURL=query-executor.js.map