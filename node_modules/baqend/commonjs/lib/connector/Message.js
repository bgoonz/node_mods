"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthMessage = exports.Message = exports.appendQueryParams = exports.StatusCode = void 0;
var error_1 = require("../error");
/**
 * Checks whether the user uses a browser which does support revalidation.
 */
// @ts-ignore
var REVALIDATION_SUPPORTED = typeof navigator === 'undefined' || (typeof chrome !== 'undefined' && /google/i.test(navigator.vendor)) || (/cros i686/i.test(navigator.platform));
exports.StatusCode = {
    NOT_MODIFIED: 304,
    BAD_CREDENTIALS: 460,
    BUCKET_NOT_FOUND: 461,
    INVALID_PERMISSION_MODIFICATION: 462,
    INVALID_TYPE_VALUE: 463,
    OBJECT_NOT_FOUND: 404,
    OBJECT_OUT_OF_DATE: 412,
    PERMISSION_DENIED: 466,
    QUERY_DISPOSED: 467,
    QUERY_NOT_SUPPORTED: 468,
    SCHEMA_NOT_COMPATIBLE: 469,
    SCHEMA_STILL_EXISTS: 470,
    SYNTAX_ERROR: 471,
    TRANSACTION_INACTIVE: 472,
    TYPE_ALREADY_EXISTS: 473,
    TYPE_STILL_REFERENCED: 474,
    SCRIPT_ABORTION: 475,
};
/**
 * Appends the given query parameters to the url
 * @param url - on which the parameters will be appended
 * @param queryParams - The Query parameters which should be appended
 * @return The URL with the appended parameters
 */
function appendQueryParams(url, queryParams) {
    var queryString = typeof queryParams === 'string' ? queryParams : Object.entries(queryParams)
        .filter(function (_a) {
        var value = _a[1];
        return value !== undefined;
    })
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return key + "=" + encodeURIComponent(value);
    })
        .join('&');
    if (!queryString) {
        return url;
    }
    var sep = url.indexOf('?') >= 0 ? '&' : '?';
    return url + sep + queryString;
}
exports.appendQueryParams = appendQueryParams;
var Message = /** @class */ (function () {
    /**
     * @param args The path arguments
     */
    function Message() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.withCredentials = false;
        this.progressCallback = null;
        this._tokenStorage = null;
        this._responseType = null;
        var index = 0;
        var path = this.spec.path[0];
        var len = this.spec.path.length;
        for (var i = 1; i < len; i += 1) {
            if (this.spec.dynamic && len - 1 === i) {
                path += args[index].split('/').map(encodeURIComponent).join('/');
            }
            else {
                path += encodeURIComponent(args[index]) + this.spec.path[i];
            }
            index += 1;
        }
        var queryParams = {};
        for (var i = 0; i < this.spec.query.length; i += 1) {
            var arg = args[index];
            index += 1;
            if (arg !== undefined && arg !== null) {
                queryParams[this.spec.query[i]] = arg;
            }
        }
        this.request = {
            method: this.spec.method,
            path: appendQueryParams(path, queryParams),
            entity: null,
            headers: {},
        };
        if (args[index]) {
            this.entity(args[index], 'json');
        }
        this.responseType('json');
    }
    Object.defineProperty(Message.prototype, "spec", {
        /**
         * Returns the specification of this message
         */
        get: function () { return null; },
        enumerable: false,
        configurable: true
    });
    /**
     * Creates a new message class with the given message specification
     * @return A created message object for the specification
     */
    Message.create = function (specification) {
        var parts = specification.path.split('?');
        var path = parts[0].split(/[:*]\w*/);
        var query = [];
        if (parts[1]) {
            parts[1].split('&').forEach(function (arg) {
                var part = arg.split('=');
                query.push(part[0]);
            });
        }
        var spec = {
            path: path,
            query: query,
            status: specification.status,
            method: specification.method,
            dynamic: specification.path.indexOf('*') !== -1,
        };
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(class_1.prototype, "spec", {
                get: function () {
                    return spec;
                },
                enumerable: false,
                configurable: true
            });
            return class_1;
        }(Message));
    };
    Object.defineProperty(Message.prototype, "isBinary", {
        get: function () {
            return (this.request.type && this.request.type in Message.BINARY) || this._responseType in Message.BINARY;
        },
        enumerable: false,
        configurable: true
    });
    Message.prototype.tokenStorage = function (value) {
        if (value === undefined) {
            return this._tokenStorage;
        }
        this._tokenStorage = value;
        return this;
    };
    Message.prototype.path = function (path) {
        if (path !== undefined) {
            var queryIndex = this.request.path.indexOf('?') + 1;
            this.request.path = path + (queryIndex > 0 ? (path.indexOf('?') > -1 ? '&' : '?') + this.request.path.substring(queryIndex) : '');
            return this;
        }
        return this.request.path;
    };
    Message.prototype.header = function (name, value) {
        if (value === null) {
            delete this.request.headers[name];
            return this;
        }
        if (value !== undefined) {
            this.request.headers[name] = value;
            return this;
        }
        return this.request.headers[name];
    };
    /**
     * Sets the entity type
     * @param data - The data to send
     * @param type - the type of the data one of 'json'|'text'|'blob'|'arraybuffer'
     * defaults detect the type based on the body data
     * @return This message object
     */
    Message.prototype.entity = function (data, type) {
        var requestType = type;
        if (!requestType) {
            if (typeof data === 'string') {
                if (/^data:(.+?)(;base64)?,.*$/.test(data)) {
                    requestType = 'data-url';
                }
                else {
                    requestType = 'text';
                }
            }
            else if (typeof Blob !== 'undefined' && data instanceof Blob) {
                requestType = 'blob';
            }
            else if (typeof Buffer !== 'undefined' && data instanceof Buffer) {
                requestType = 'buffer';
            }
            else if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
                requestType = 'arraybuffer';
            }
            else if (typeof FormData !== 'undefined' && data instanceof FormData) {
                requestType = 'form';
            }
            else {
                requestType = 'json';
            }
        }
        this.request.type = requestType;
        this.request.entity = data;
        return this;
    };
    Message.prototype.mimeType = function (mimeType) {
        return this.header('content-type', mimeType);
    };
    Message.prototype.contentLength = function (contentLength) {
        if (contentLength !== undefined) {
            return this.header('content-length', "" + contentLength);
        }
        return Number(this.header('content-length'));
    };
    Message.prototype.ifMatch = function (eTag) {
        return this.header('If-Match', this.formatETag(eTag));
    };
    Message.prototype.ifNoneMatch = function (eTag) {
        return this.header('If-None-Match', this.formatETag(eTag));
    };
    Message.prototype.ifUnmodifiedSince = function (date) {
        // IE 10 returns UTC strings and not an RFC-1123 GMT date string
        return this.header('if-unmodified-since', date && date.toUTCString().replace('UTC', 'GMT'));
    };
    /**
     * Indicates that the request should not be served by a local cache
     * @return
     */
    Message.prototype.noCache = function () {
        if (!REVALIDATION_SUPPORTED) {
            this.ifMatch('') // is needed for firefox or safari (but forbidden for chrome)
                .ifNoneMatch('-'); // is needed for edge and ie (but forbidden for chrome)
        }
        return this.cacheControl('max-age=0, no-cache');
    };
    Message.prototype.cacheControl = function (value) {
        return this.header('cache-control', value);
    };
    Message.prototype.acl = function (acl) {
        return this.header('baqend-acl', acl && JSON.stringify(acl));
    };
    Message.prototype.customHeaders = function (customHeaders) {
        return this.header('baqend-custom-headers', customHeaders && JSON.stringify(customHeaders));
    };
    Message.prototype.accept = function (accept) {
        return this.header('accept', accept);
    };
    Message.prototype.responseType = function (type) {
        if (type !== undefined) {
            this._responseType = type;
            return this;
        }
        return this._responseType;
    };
    Message.prototype.progress = function (callback) {
        if (callback !== undefined) {
            this.progressCallback = callback;
            return this;
        }
        return this.progressCallback;
    };
    /**
     * Adds the given string to the request path
     *
     * If the parameter is an object, it will be serialized as a query string.
     *
     * @param query which will added to the request path
     * @return
     */
    Message.prototype.addQueryString = function (query) {
        this.request.path = appendQueryParams(this.request.path, query);
        return this;
    };
    Message.prototype.formatETag = function (eTag) {
        if (eTag === null || eTag === undefined || eTag === '*') {
            return eTag;
        }
        var tag = "" + eTag;
        if (tag.indexOf('"') === -1) {
            tag = "\"" + tag + "\"";
        }
        return tag;
    };
    /**
     * Handle the receive
     * @param response The received response headers and data
     * @return
     */
    Message.prototype.doReceive = function (response) {
        if (this.spec.status.indexOf(response.status) === -1) {
            throw new error_1.CommunicationError(this, response);
        }
    };
    Message.StatusCode = exports.StatusCode;
    Message.BINARY = {
        blob: true,
        buffer: true,
        stream: true,
        arraybuffer: true,
        'data-url': true,
        base64: true,
    };
    return Message;
}());
exports.Message = Message;
var OAuthMessage = /** @class */ (function (_super) {
    __extends(OAuthMessage, _super);
    function OAuthMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OAuthMessage.prototype, "spec", {
        get: function () {
            return {
                method: 'OAUTH',
                dynamic: false,
                path: [''],
                query: [],
                status: [200],
            };
        },
        enumerable: false,
        configurable: true
    });
    return OAuthMessage;
}(Message));
exports.OAuthMessage = OAuthMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb25uZWN0b3IvTWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxrQ0FBOEM7QUF5QjlDOztHQUVHO0FBQ0gsYUFBYTtBQUNiLElBQU0sc0JBQXNCLEdBQUcsT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBRXJLLFFBQUEsVUFBVSxHQUFHO0lBQ3hCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGVBQWUsRUFBRSxHQUFHO0lBQ3BCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsK0JBQStCLEVBQUUsR0FBRztJQUNwQyxrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixpQkFBaUIsRUFBRSxHQUFHO0lBQ3RCLGNBQWMsRUFBRSxHQUFHO0lBQ25CLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIscUJBQXFCLEVBQUUsR0FBRztJQUMxQixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLGVBQWUsRUFBRSxHQUFHO0NBQ3JCLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILFNBQWdCLGlCQUFpQixDQUFDLEdBQVcsRUFBRSxXQUEyRDtJQUN4RyxJQUFNLFdBQVcsR0FBRyxPQUFPLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFB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