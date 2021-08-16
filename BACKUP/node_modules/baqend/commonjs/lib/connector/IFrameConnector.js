"use strict";
/* this connector will only be choose in browser compatible environments */
/* eslint no-restricted-globals: ["off", "location", "addEventListener"] */
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
exports.IFrameConnector = void 0;
var Connector_1 = require("./Connector");
var XMLHttpConnector_1 = require("./XMLHttpConnector");
var IFrameConnector = /** @class */ (function (_super) {
    __extends(IFrameConnector, _super);
    function IFrameConnector(host, port, secure, basePath) {
        var _this = _super.call(this, host, port, secure, basePath) || this;
        _this.queue = null;
        _this.connected = false;
        _this.mid = 0;
        _this.messages = {};
        _this.doReceive = _this.doReceive.bind(_this);
        addEventListener('message', _this.doReceive, false);
        return _this;
    }
    /**
     * Indicates if this connector implementation is usable for the given host and port
     * @param host
     * @param port
     * @param secure
     * @return
     */
    IFrameConnector.isUsable = function (host, port, secure) {
        // we use location directly here, since there exists environments, which provide a location and a document but
        // no window object
        if (typeof location === 'undefined' || typeof document === 'undefined') {
            return false;
        }
        var locationSecure = location.protocol === 'https:';
        var locationPort = location.port || (locationSecure ? 443 : 80);
        return location.hostname !== host || locationPort !== port || locationSecure !== secure;
    };
    IFrameConnector.prototype.load = function (path) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = this.origin + this.basePath + path;
        this.iframe.setAttribute('style', IFrameConnector.style);
        document.body.appendChild(this.iframe);
        this.queue = [];
        this.iframe.addEventListener('load', this.onLoad.bind(this), false);
    };
    IFrameConnector.prototype.onLoad = function () {
        if (!this.queue) {
            return;
        }
        var queue = this.queue;
        for (var i = 0; i < queue.length; i += 1) {
            this.postMessage(queue[i]);
        }
        this.queue = null;
    };
    /**
     * @inheritDoc
     */
    IFrameConnector.prototype.doSend = function (message, request, receive) {
        var _this = this;
        // binary data will be send and received directly
        if (message.isBinary) {
            _super.prototype.doSend.call(this, message, request, receive);
            return;
        }
        if (!this.iframe) {
            this.load(message.request.path);
            // ensure that we get a local resource cache hit
            // eslint-disable-next-line no-param-reassign
            message.request.path = '/connect';
        }
        var msg = {
            mid: this.mid += 1,
            method: request.method,
            path: request.path,
            headers: request.headers,
            entity: request.entity,
            responseHeaders: Connector_1.Connector.RESPONSE_HEADERS,
        };
        this.messages[msg.mid] = receive;
        var strMsg = JSON.stringify(msg);
        if (this.queue) {
            this.queue.push(strMsg);
        }
        else {
            this.postMessage(strMsg);
        }
        if (!this.connected) {
            setTimeout(function () {
                if (_this.messages[msg.mid]) {
                    delete _this.messages[msg.mid];
                    receive({
                        status: 0,
                        error: new Error('Connection refused.'),
                        headers: {},
                    });
                }
            }, 10000);
        }
    };
    IFrameConnector.prototype.postMessage = function (msg) {
        this.iframe.contentWindow.postMessage(msg, this.origin);
    };
    IFrameConnector.prototype.doReceive = function (event) {
        if (event.origin !== this.origin || event.data[0] !== '{') {
            return;
        }
        var msg = JSON.parse(event.data);
        var receive = this.messages[msg.mid];
        if (receive) {
            delete this.messages[msg.mid];
            this.connected = true;
            receive({
                status: msg.status,
                headers: msg.headers,
                entity: msg.entity,
            });
        }
    };
    IFrameConnector.style = 'width:1px;height:1px;position:absolute;top:-10px;left:-10px;';
    return IFrameConnector;
}(XMLHttpConnector_1.XMLHttpConnector));
exports.IFrameConnector = IFrameConnector;
Connector_1.Connector.connectors.push(IFrameConnector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUZyYW1lQ29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2Nvbm5lY3Rvci9JRnJhbWVDb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJFQUEyRTtBQUMzRSwyRUFBMkU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRSx5Q0FBMkQ7QUFDM0QsdURBQXNEO0FBSXREO0lBQXFDLG1DQUFnQjtJQWlDbkQseUJBQVksSUFBWSxFQUFFLElBQVksRUFBRSxNQUFlLEVBQUUsUUFBZ0I7UUFBekUsWUFDRSxrQkFBTSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsU0FPcEM7UUFoQ08sV0FBSyxHQUFpQixJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFZLEtBQUssQ0FBQztRQXlCakMsS0FBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDYixLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBRTNDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDOztJQUNyRCxDQUFDO0lBNUJEOzs7Ozs7T0FNRztJQUNJLHdCQUFRLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLElBQVksRUFBRSxNQUFlO1FBQ3pELDhHQUE4RztRQUM5RyxtQkFBbUI7UUFDbkIsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksT0FBTyxRQUFRLEtBQUssV0FBVyxFQUFFO1lBQ3RFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQztRQUN0RCxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxH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