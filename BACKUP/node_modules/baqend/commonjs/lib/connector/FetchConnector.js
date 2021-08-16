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
exports.FetchConnector = void 0;
var Connector_1 = require("./Connector");
var FetchConnector = /** @class */ (function (_super) {
    __extends(FetchConnector, _super);
    function FetchConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Indicates if this connector implementation is usable for the given host and port
     * @return
     */
    FetchConnector.isUsable = function () {
        return typeof fetch !== 'undefined';
    };
    /**
     * @inheritDoc
     */
    FetchConnector.prototype.doSend = function (message, request, receive) {
        var url = this.origin + this.basePath + request.path;
        var method = request.method;
        var headers = request.headers;
        var entity = request.entity;
        var credentials = message.withCredentials ? 'include' : 'same-origin';
        return fetch(url, {
            method: method,
            headers: headers,
            body: entity,
            credentials: credentials,
        }).then(function (res) {
            var responseHeaders = {};
            Connector_1.Connector.RESPONSE_HEADERS.forEach(function (name) {
                responseHeaders[name] = res.headers.get ? res.headers.get(name) : res.headers[name];
            });
            var response = {
                headers: responseHeaders,
                status: res.status,
                entity: res,
            };
            receive(response);
        });
    };
    /**
     * @inheritDoc
     */
    FetchConnector.prototype.fromFormat = function (response, rawEntity, type) {
        if (type === 'json') {
            return rawEntity.json();
        }
        if (type === 'blob') {
            return rawEntity.blob();
        }
        if (type === 'data-url' || type === 'base64') {
            return rawEntity.blob().then(function (entity) {
                var reader = new FileReader();
                reader.readAsDataURL(entity);
                return new Promise(function (resolve, reject) {
                    reader.onload = resolve;
                    reader.onerror = reject;
                }).then(function () {
                    var result = reader.result;
                    if (type === 'base64') {
                        result = result.substring(result.indexOf(',') + 1);
                    }
                    return result;
                });
            });
        }
        return rawEntity;
    };
    /**
     * @inheritDoc
     */
    FetchConnector.prototype.toFormat = function (message) {
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
                } // fallthrough
                case 'base64': {
                    var binaryStr = atob(entity);
                    var len = binaryStr.length;
                    var array = new Uint8Array(len);
                    for (var i = 0; i < len; i += 1) {
                        array[i] = binaryStr.charCodeAt(i);
                    }
                    type = 'blob';
                    entity = new Blob([array], { type: mimeType });
                    break;
                }
                case 'json': {
                    if (typeof entity !== 'string') {
                        entity = JSON.stringify(entity);
                    }
                    break;
                }
                case 'text':
                    break;
                default:
                    throw new Error("Supported request format:" + type);
            }
            message.entity(entity, type).mimeType(mimeType);
        }
    };
    return FetchConnector;
}(Connector_1.Connector));
exports.FetchConnector = FetchConnector;
Connector_1.Connector.connectors.push(FetchConnector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmV0Y2hDb25uZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvY29ubmVjdG9yL0ZldGNoQ29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUVxQjtBQUdyQjtJQUFvQyxrQ0FBUztJQUE3Qzs7SUEySEEsQ0FBQztJQTFIQzs7O09BR0c7SUFDSSx1QkFBUSxHQUFmO1FBQ0UsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLENBQUM7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0JBQU0sR0FBTixVQUFPLE9BQWdCLEVBQUUsT0FBZ0IsRUFBRSxPQUFxQztRQUM5RSxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUMvQyxJQUFBLE1BQU0sR0FBSyxPQUFPLE9BQVosQ0FBYTtRQUNuQixJQUFBLE9BQU8sR0FBSyxPQUFPLFFBQVosQ0FBYTtRQUNwQixJQUFBLE1BQU0sR0FBSyxPQUFPLE9BQVosQ0FBYTtRQUMzQixJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUV4RSxPQUFPLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDaEIsTUFBTSxRQUFBO1lBQ04sT0FBTyxTQUFBO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixXQUFXLGFBQUE7U0FDWixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNWLElBQU0sZUFBZSxHQUFxQyxFQUFFLENBQUM7WUFDN0QscUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUN0QyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxP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