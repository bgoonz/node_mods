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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeConnector = void 0;
var https_1 = __importDefault(require("https"));
var http_1 = __importDefault(require("http"));
var Connector_1 = require("./Connector");
var error_1 = require("../error");
var NodeConnector = /** @class */ (function (_super) {
    __extends(NodeConnector, _super);
    function NodeConnector(host, port, secure, basePath) {
        var _this = _super.call(this, host, port, secure, basePath) || this;
        _this.cookie = null;
        _this.http = secure ? https_1.default : http_1.default;
        return _this;
    }
    NodeConnector.isUsable = function () {
        // prevent using when it is shimmed
        return !!(http_1.default && http_1.default.Server);
    };
    /**
     * @inheritDoc
     */
    NodeConnector.prototype.doSend = function (message, request, receive) {
        var _this = this;
        var entity = request.entity;
        var type = request.type;
        var responseType = message.responseType();
        if (this.cookie && message.withCredentials) {
            request.headers.cookie = this.cookie;
        }
        var nodeRequest = __assign(__assign({}, request), { host: this.host, port: this.port, path: this.basePath + request.path });
        var req = this.http.request(nodeRequest, function (res) {
            var cookie = res.headers['set-cookie'];
            if (cookie) {
                // cookie may be an array, convert it to a string
                _this.cookie = _this.parseCookie("" + cookie);
            }
            var status = res.statusCode || 0;
            if (status >= 400) {
                responseType = 'json';
            }
            if (responseType === 'stream') {
                receive({
                    status: status,
                    headers: res.headers,
                    entity: res,
                });
                return;
            }
            var binary = responseType && responseType !== 'text' && responseType !== 'json';
            var chunks = [];
            if (!binary) {
                res.setEncoding('utf-8');
            }
            res.on('data', function (chunk) {
                chunks.push(chunk);
            });
            res.on('end', function () {
                receive({
                    status: status,
                    headers: res.headers,
                    entity: binary ? Buffer.concat(chunks) : chunks.join(''),
                });
            });
        });
        req.on('error', function (e) {
            receive({
                status: 0,
                headers: {},
                error: e,
            });
        });
        if (type === 'stream') {
            entity.pipe(req);
        }
        else if (type === 'buffer') {
            req.end(entity);
        }
        else if (type) {
            req.end(entity, 'utf8');
        }
        else {
            req.end();
        }
    };
    /**
     * Parse the cookie header
     * @param header
     * @return
     */
    NodeConnector.prototype.parseCookie = function (header) {
        var parts = header.split(';');
        for (var i = 0, len = parts.length; i < len; i += 1) {
            var part = parts[i];
            if (part.trim().indexOf('Expires=') === 0) {
                var date = Date.parse(part.substring(8));
                if (date < Date.now()) {
                    return null;
                }
            }
        }
        return parts[0];
    };
    /**
     * @inheritDoc
     */
    NodeConnector.prototype.toFormat = function (message) {
        var type = message.request.type;
        if (type) {
            var entity = message.request.entity;
            var mimeType = message.mimeType();
            switch (type) {
                case 'stream':
                    if (!message.contentLength()) {
                        throw new error_1.PersistentError('You must specify a content length while making a stream based upload.');
                    }
                    break;
                case 'buffer':
                    break;
                case 'arraybuffer':
                    type = 'buffer';
                    entity = Buffer.from(entity);
                    break;
                case 'data-url': {
                    var match = entity.match(/^data:(.+?)(;base64)?,(.*)$/);
                    var isBase64 = match[2];
                    // eslint-disable-next-line prefer-destructuring
                    entity = match[3];
                    type = 'buffer';
                    mimeType = mimeType || match[1];
                    if (isBase64) {
                        entity = Buffer.from(entity, 'base64');
                    }
                    else {
                        entity = Buffer.from(decodeURIComponent(entity), 'utf8');
                    }
                    break;
                }
                case 'base64':
                    type = 'buffer';
                    entity = Buffer.from(entity, 'base64');
                    break;
                case 'json':
                    if (typeof entity !== 'string') {
                        entity = JSON.stringify(entity);
                    }
                    break;
                case 'text':
                    break;
                default:
                    throw new Error("The request type " + type + " is not supported");
            }
            message.entity(entity, type).mimeType(mimeType);
        }
    };
    /**
     * @inheritDoc
     */
    NodeConnector.prototype.fromFormat = function (response, entity, type) {
        switch (type) {
            case 'json':
                return JSON.parse(entity);
            case 'data-url':
            case 'base64': {
                var base64 = entity.toString('base64');
                if (type === 'base64') {
                    return base64;
                }
                return "data:" + response.headers['content-type'] + ";base64," + base64;
            }
            case 'arraybuffer':
                return entity.buffer.slice(entity.byteOffset, entity.byteOffset + entity.byteLength);
            default:
                return entity;
        }
    };
    return NodeConnector;
}(Connector_1.Connector));
exports.NodeConnector = NodeConnector;
Connector_1.Connector.connectors.push(NodeConnector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9kZUNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9jb25uZWN0b3IvTm9kZUNvbm5lY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQiw4Q0FBd0I7QUFDeEIseUNBRXFCO0FBQ3JCLGtDQUEyQztBQUkzQztJQUFtQyxpQ0FBUztJQVUxQyx1QkFBWSxJQUFZLEVBQUUsSUFBWSxFQUFFLE1BQWUsRUFBRSxRQUFnQjtRQUF6RSxZQUNFLGtCQUFNLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxTQUdwQztRQUZDLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFLLENBQUMsQ0FBQyxDQUFDLGNBQUksQ0FBQzs7SUFDcEMsQ0FBQztJQVRNLHNCQUFRLEdBQWY7UUFDRSxtQ0FBbUM7UUFDbkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxjQUFJLElBQUksY0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFRRDs7T0FFRztJQUNILDhCQUFNLEdBQU4sVUFBTyxPQUFnQixFQUFFLE9BQWdCLEVBQUUsT0FBcUM7UUFBaEYsaUJBcUVDO1FBcEVTLElBQUEsTUFBTSxHQUFLLE9BQU8sT0FBWixDQUFhO1FBQ25CLElBQUEsSUFBSSxHQUFLLE9BQU8sS0FBWixDQUFhO1FBQ3pCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUUxQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLGVBQWUsRUFBRTtZQUMxQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3RDO1FBRUQsSUFBTSxXQUFXLHlCQUNaLE9BQU8sS0FB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