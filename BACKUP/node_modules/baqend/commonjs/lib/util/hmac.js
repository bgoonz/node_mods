"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hmac = void 0;
var crypto_1 = __importDefault(require("crypto"));
/**
 * Calculates a Keyed-Hash Message Authentication Code (HMAC) from a message and a key.
 *
 * @param message
 * @param key
 * @return
 */
function hmac(message, key) {
    return Promise.resolve(crypto_1.default.createHmac('sha1', key)
        .update(message)
        .digest('hex'));
}
exports.hmac = hmac;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1hYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi91dGlsL2htYWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQTRCO0FBRTVCOzs7Ozs7R0FNRztBQUNILFNBQWdCLElBQUksQ0FBQyxPQUFlLEVBQUUsR0FBVztJQUMvQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQ3BCLGdCQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7U0FDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FDakIsQ0FBQztBQUNKLENBQUM7QUFORCxvQkFNQyJ9