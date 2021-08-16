"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var msg = __importStar(require("../message"));
/**
 * A Logger to store log notes when running the app.
 */
var Logger = /** @class */ (function () {
    function Logger() {
        this.entityManager = null;
        this.levelIndex = 2;
    }
    /**
     * Creates a Logger instance for the given EntityManager
     * @param entityManager - Theo owning entityManager
     * @return The created logger instance
     */
    Logger.create = function (entityManager) {
        var proto = this.prototype;
        var logger = (function () {
            function LoggerFunction() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                proto.log.apply(LoggerFunction, args);
            }
            Object.getOwnPropertyNames(proto).forEach(function (key) {
                Object.defineProperty(LoggerFunction, key, Object.getOwnPropertyDescriptor(proto, key));
            });
            return LoggerFunction;
        })();
        logger.init(entityManager);
        return logger;
    };
    Object.defineProperty(Logger.prototype, "level", {
        /**
         * The log level which will be logged
         *
         * The log level can be one of 'trace', 'debug', 'info', 'warn', 'error'
         * @type string
         */
        get: function () {
            return Logger.LEVELS[this.levelIndex];
        },
        /**
         * Sets the log level which will be logged
         * @param value
         */
        set: function (value) {
            var index = Logger.LEVELS.indexOf(value);
            if (index === -1) {
                throw new Error("Unknown logging level " + value);
            }
            this.levelIndex = index;
        },
        enumerable: false,
        configurable: true
    });
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var level = Logger.LEVELS.indexOf(args[0]) === -1 ? 'info' : args.shift();
        if (this.levelIndex > Logger.LEVELS.indexOf(level)) {
            return Promise.resolve(null);
        }
        var message = typeof args[0] === 'string' ? this.format(args.shift(), args) : '[no message]';
        var data = null;
        if (args.length) {
            var arg = args.pop();
            data = arg;
            if (typeof arg !== 'object' || Array.isArray(arg)) {
                data = { data: arg };
            }
            if (arg instanceof Error) {
                // errors aren't loggable by default, since they do not have any visible property
                var 
                // @ts-ignore
                stack = arg.stack, data1 = arg.data, message1 = arg.message, name_1 = arg.name, status_1 = arg.status;
                data = {
                    name: name_1,
                    message: message1,
                    stack: stack,
                    status: status_1,
                    data: data1,
                };
            }
        }
        if (args.length) {
            message += ", " + args.join(', ');
        }
        return this.logJSON(__assign({ date: new Date().toISOString(), message: message,
            level: level,
            data: data }, (this.entityManager.me && { user: this.entityManager.me.id })));
    };
    Logger.prototype.format = function (message, args) {
        if (args.length === 0) {
            return message;
        }
        var str = String(message).replace(Logger.FORMAT_REGEXP, function (x) {
            if (x === '%%') {
                return '%';
            }
            if (!args.length) {
                return x;
            }
            switch (x) {
                case '%s':
                    return String(args.shift());
                case '%d':
                    return String(Number(args.shift()));
                case '%j':
                    try {
                        return JSON.stringify(args.shift());
                    }
                    catch (_) {
                        return '[Circular]';
                    }
                default:
                    return x;
            }
        });
        return str;
    };
    Logger.prototype.init = function (entityManager) {
        var _this = this;
        this.entityManager = entityManager;
        this.levelIndex = 2;
        Logger.LEVELS.forEach(function (level) {
            _this[level] = _this.log.bind(_this, level);
        });
    };
    Logger.prototype.logJSON = function (json) {
        if (!this.entityManager.isReady) {
            return this.entityManager.ready(this.logJSON.bind(this, json));
        }
        return this.entityManager.send(new msg.CreateObject('logs.AppLog', json));
    };
    Logger.LEVELS = ['trace', 'debug', 'info', 'warn', 'error'];
    Logger.FORMAT_REGEXP = /%[sdj%]/g;
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2ludGVyc2VjdGlvbi9Mb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQWtDO0FBTWxDOztHQUVHO0FBQ0g7SUFBQTtRQUtTLGtCQUFhLEdBQWtCLElBQVcsQ0FBQztRQUUzQyxlQUFVLEdBQVcsQ0FBQyxDQUFDO0lBa01oQyxDQUFDO0lBaE1DOzs7O09BSUc7SUFDSSxhQUFNLEdBQWIsVUFBYyxhQUE0QjtRQUN4QyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTdCLElBQU0sTUFBTSxHQUFHLENBQUM7WUFDZCxTQUFTLGNBQWM7Z0JBQUMsY0FBYztxQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO29CQUFkLHlCQUFjOztnQkFDcEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLElBQVcsQ0FBQyxDQUFDO1lBQy9DLENBQUM7WUFFRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDNUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFFLENBQUMsQ0FBQztZQUMzRixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sY0FBK0IsQ0FBQztRQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRUwsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUzQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBUUQsc0JBQUkseUJBQUs7UUFOVDs7Ozs7V0FLRzthQUNIO1lBQ0UsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4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