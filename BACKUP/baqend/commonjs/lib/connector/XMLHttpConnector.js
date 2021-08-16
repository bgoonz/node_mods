"use strict";
/* this connector will only be choose in browser compatible environments */
/* eslint no-restricted-globals: ["off", "addEventListener", "removeEventListener"] */
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
exports.XMLHttpConnector = void 0;
var Connector_1 = require("./Connector");
var util_1 = require("../util");
var XMLHttpConnector = /** @class */ (function (_super) {
    __extends(XMLHttpConnector, _super);
    function XMLHttpConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    XMLHttpConnector.isUsable = function (host, port, secure, basePath) {
        return typeof XMLHttpRequest !== 'undefined';
    };
    /**
     * @inheritDoc
     */
    XMLHttpConnector.prototype.doSend = function (message, request, receive) {
        var _this = this;
        if (request.method === 'OAUTH') {
            if (this.oAuthHandle) {
                this.oAuthHandle({ status: 409, headers: {}, entity: '{"message": "A new OAuth request was sent."}' });
            }
            localStorage.removeItem('oauth-response');
            var handler_1 = function (event) {
                if (event.key === 'oauth-response' && _this.oAuthHandle && event.newValue) {
                    _this.oAuthHandle(JSON.parse(event.newValue));
                }
            };
            this.oAuthHandle = function (msg) {
                receive(msg);
                localStorage.removeItem('oauth-response');
                removeEventListener('storage', handler_1, false);
            };
            addEventListener('storage', handler_1, false);
            return;
        }
        var xhr = new XMLHttpRequest();
        var url = this.origin + this.basePath + request.path;
        xhr.onreadystatechange = function () {
            // if we receive an error switch the response type to json
            if (xhr.responseType && xhr.readyState === 2 && xhr.status >= 400) {
                xhr.responseType = 'text';
            }
            if (xhr.readyState === 4) {
                var response_1 = {
                    headers: {},
                    status: xhr.status,
                    entity: xhr.response || xhr.responseText,
                };
                Connector_1.Connector.RESPONSE_HEADERS.forEach(function (name) {
                    response_1.headers[name] = xhr.getResponseHeader(name) || '';
                });
                receive(response_1);
            }
        };
        // Set the message progress callback
        if (xhr.upload && message.progress()) {
            xhr.upload.onprogress = message.progress();
        }
        xhr.open(request.method, url, true);
        var entity = request.entity;
        var headers = request.headers;
        var headerNames = Object.keys(headers);
        for (var i = 0, len = headerNames.length; i < len; i += 1) {
            var headerName = headerNames[i];
            xhr.setRequestHeader(headerName, headers[headerName]);
        }
        xhr.withCredentials = message.withCredentials;
        switch (message.responseType()) {
            case 'arraybuffer':
                xhr.responseType = 'arraybuffer';
                break;
            case 'blob':
            case 'data-url':
            case 'base64':
                xhr.responseType = 'blob';
                break;
            default:
            // ignore
        }
        xhr.send(entity);
    };
    /**
     * @inheritDoc
     */
    XMLHttpConnector.prototype.fromFormat = function (response, entity, type) {
        if (type === 'json') {
            return JSON.parse(entity);
        }
        if (type === 'data-url' || type === 'base64') {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(entity);
            return new Promise(function (resolve, reject) {
                reader_1.onload = resolve;
                reader_1.onerror = reject;
            }).then(function () {
                var result = reader_1.result;
                if (type === 'base64' && typeof result === 'string') {
                    result = result.substring(result.indexOf(',') + 1);
                }
                return result;
            });
        }
        return entity;
    };
    /**
     * @inheritDoc
     */
    XMLHttpConnector.prototype.toFormat = function (message) {
        var type = message.request.type;
        if (type) {
            var entity = message.request.entity;
            var mimeType = message.mimeType();
            switch (type) {
                case 'blob':
                    mimeType = mimeType || entity.type;
                    break;
                case 'arraybuffer':
                case 'form':
                    break;
                case 'data-url': {
                    var match = entity.match(/^data:(.+?)(;base64)?,(.*)$/);
                    var isBase64 = match[2];
                    // eslint-disable-next-line prefer-destructuring
                    entity = match[3];
                    type = 'blob';
                    mimeType = mimeType || match[1];
                    if (!isBase64) {
                        entity = decodeURIComponent(entity);
                        break;
                    }
                }
                // fallthrough
                case 'base64': {
                    var binaryStr = util_1.atob(entity);
                    var len = binaryStr.length;
                    var array = new Uint8Array(len);
                    for (var i = 0; i < len; i += 1) {
                        array[i] = binaryStr.charCodeAt(i);
                    }
                    type = 'blob';
                    entity = new Blob([array], { type: mimeType });
                    break;
                }
                case 'json':
                    if (typeof entity !== 'string') {
                        entity = JSON.stringify(entity);
                    }
                    break;
                case 'text':
                    break;
                default:
                    throw new Error("Supported request format:" + type);
            }
            message.entity(entity, type).mimeType(mimeType);
        }
    };
    return XMLHttpConnector;
}(Connector_1.Connector));
exports.XMLHttpConnector = XMLHttpConnector;
Connector_1.Connector.connectors.push(XMLHttpConnector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWE1MSHR0cENvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb25uZWN0b3IvWE1MSHR0cENvbm5lY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkVBQTJFO0FBQzNFLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLHlDQUVxQjtBQUNyQixnQ0FBK0I7QUFHL0I7SUFBc0Msb0NBQVM7SUFBL0M7O0lBb0xBLENBQUM7SUFqTEM7O09BRUc7SUFDSCw2REFBNkQ7SUFDdEQseUJBQVEsR0FBZixVQUFnQixJQUFZLEVBQUUsSUFBWSxFQUFFLE1BQWUsRUFBRSxRQUFnQjtRQUMzRSxPQUFPLE9BQU8sY0FBYyxLQUFLLFdBQVcsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBTSxHQUFOLFVBQU8sT0FBZ0IsRUFBRSxPQUFnQixFQUFFLE9BQWlCO1FBQTVELGlCQWdGQztRQS9FQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssT0FBTyxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsOENBQThDLEVBQUUsQ0FBQyxDQUFDO2FBQ3hHO1lBRUQsWUFBWSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRTFDLElBQU0sU0FBTyxHQUFHLFVBQUMsS0FBbUI7Z0JBQ2xDLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxnQkFBZ0IsSUFBSSxLQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ3hFLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDOUM7WUFDSCxDQUFDLENBQUM7WUFFRixJQUFJLENBQUMs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