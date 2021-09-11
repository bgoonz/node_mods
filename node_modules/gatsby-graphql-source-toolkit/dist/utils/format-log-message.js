"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLogMessage = void 0;
const chalk_1 = __importDefault(require("chalk"));
function formatLogMessage(input, { verbose = false } = {}) {
    let message;
    if (typeof input === `string`) {
        message = input;
    }
    else {
        message = input[0];
    }
    return verbose
        ? `${chalk_1.default.white.bgBlue(` gatsby-graphql-toolkit `)} ${message}`
        : `[gatsby-graphql-toolkit] ${message}`;
}
exports.formatLogMessage = formatLogMessage;
//# sourceMappingURL=format-log-message.js.map