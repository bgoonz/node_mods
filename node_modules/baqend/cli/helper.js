"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNativeClassNamespace = exports.readInput = exports.ensureDir = exports.isFile = exports.isDir = exports.stat = exports.nativeNamespaces = exports.mkdir = exports.readFile = exports.writeFile = exports.readDir = void 0;
const readline_1 = __importDefault(require("readline"));
const stream_1 = require("stream");
const util_1 = require("util");
const fs = __importStar(require("fs"));
exports.readDir = util_1.promisify(fs.readdir);
exports.writeFile = util_1.promisify(fs.writeFile);
exports.readFile = util_1.promisify(fs.readFile);
exports.mkdir = util_1.promisify(fs.mkdir);
exports.nativeNamespaces = ['logs', 'speedKit', 'rum', 'jobs'];
/**
 * Returns the stats for the given path
 * @param path
 */
function stat(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, st) => {
            if (!err) {
                resolve(st);
            }
            else if (err.code === 'ENOENT') {
                resolve(null);
            }
            else {
                reject(err);
            }
        });
    });
}
exports.stat = stat;
/**
 * Indicates if the given path is a directory
 * @param path
 */
function isDir(path) {
    return stat(path).then((s) => !!s && s.isDirectory());
}
exports.isDir = isDir;
/**
 * Indicates if the given path is a file
 * @param path
 */
function isFile(path) {
    return stat(path).then((s) => !!s && s.isFile());
}
exports.isFile = isFile;
/**
 * Creates a direcotry or ensures that it exists.
 *
 * @param {string} dir The path where a directory should exist.
 * @return {Promise<void>} Resolves when the given directory is existing.
 */
function ensureDir(dir) {
    return isDir(dir).then((directory) => {
        if (!directory) {
            return exports.mkdir(dir, { recursive: true });
        }
        return Promise.resolve();
    });
}
exports.ensureDir = ensureDir;
function readInput(question, hidden = false) {
    let muted = false;
    const mutableStdout = new stream_1.Writable({
        write(chunk, encoding, callback) {
            if (!muted) {
                process.stdout.write(chunk, encoding);
            }
            callback();
        },
    });
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: mutableStdout,
        terminal: true,
    });
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
        rl.on('SIGINT', () => {
            rl.close();
            reject(new Error('Input is aborted.'));
        });
        muted = hidden;
    });
}
exports.readInput = readInput;
function isNativeClassNamespace(className) {
    const [namespace] = className.split('.');
    return exports.nativeNamespaces.includes(namespace);
}
exports.isNativeClassNamespace = isNativeClassNamespace;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBZ0M7QUFDaEMsbUNBQWtDO0FBQ2xDLCtCQUFpQztBQUNqQyx1Q0FBeUI7QUFFWixRQUFBLE9BQU8sR0FBRyxnQkFBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoQyxRQUFBLFNBQVMsR0FBRyxnQkFBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwQyxRQUFBLFFBQVEsR0FBRyxnQkFBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsQyxRQUFBLEtBQUssR0FBRyxnQkFBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUU1QixRQUFBLGdCQUFnQixHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFcEU7OztHQUdHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFDLElBQVk7SUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNyQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNSLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNiO2lCQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNmO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNiO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFaRCxvQkFZQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLEtB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