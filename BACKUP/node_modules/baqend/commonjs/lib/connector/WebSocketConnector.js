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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketConnector = void 0;
var error_1 = require("../error");
var websocket_1 = require("../util/websocket");
var observable_1 = require("../util/observable");
var WebSocketConnector = /** @class */ (function () {
    /**
     *url
     */
    function WebSocketConnector(url) {
        this.observers = {};
        this.socket = null;
        this.url = url;
    }
    /**
     *url The websocket connect script url
     *a websocket connection
     */
    WebSocketConnector.create = function (url) {
        var websocket = this.websockets[url];
        if (!websocket) {
            websocket = new WebSocketConnector(url);
            this.websockets[url] = websocket;
        }
        return websocket;
    };
    WebSocketConnector.prototype.open = function () {
        var _this = this;
        if (!this.socket) {
            var socket_1 = new websocket_1.WebSocket(this.url);
            var socketPromise_1;
            var handleSocketCompletion_1 = function (error) {
                // observable error calls can throw an exception therefore cleanup beforehand
                var isError = false;
                if (_this.socket === socketPromise_1) {
                    isError = socket_1.readyState !== 3;
                    _this.socket = null;
                }
                var firstErr = null;
                Object.keys(_this.observers).forEach(function (id) {
                    var observer = _this.observers[id];
                    delete _this.observers[id]; // unsubscribe to allow re subscriptions
                    if (!observer) {
                        return;
                    }
                    try {
                        if (isError) {
                            observer.error(new error_1.CommunicationError(null, __assign({ status: 0, headers: {} }, (error instanceof Error && { error: error }))));
                        }
                        else {
                            observer.complete();
                        }
                    }
                    catch (e) {
                        if (!firstErr) {
                            firstErr = e;
                        }
                    }
                });
                if (firstErr) {
                    throw firstErr;
                }
            };
            socket_1.onerror = handleSocketCompletion_1;
            socket_1.onclose = handleSocketCompletion_1;
            socket_1.onmessage = function (event) {
                var message = JSON.parse(event.data);
                message.date = new Date(message.date);
                var id = message.id;
                if (!id) {
                    if (message.type === 'error') {
                        handleSocketCompletion_1(message);
                    }
                    return;
                }
                var observer = _this.observers[id];
                if (observer) {
                    if (message.type === 'error') {
                        observer.error(new error_1.CommunicationError(null, message));
                    }
                    else {
                        observer.next(message);
                    }
                }
            };
            socketPromise_1 = new Promise(function (resolve) {
                socket_1.onopen = function () { return resolve(socket_1); };
            });
            this.socket = socketPromise_1;
        }
        return this.socket;
    };
    WebSocketConnector.prototype.close = function () {
        if (this.socket) {
            this.socket.then(function (socket) {
                socket.close();
            });
            this.socket = null;
        }
    };
    /**
     *tokenStorage
     *id subscription ID
     *The channel for sending and receiving messages
     */
    WebSocketConnector.prototype.openStream = function (tokenStorage, id) {
        var _this = this;
        var stream = new observable_1.Observable(function (observer) {
            if (_this.observers[id]) {
                throw new Error('Only one subscription per stream is allowed.');
            }
            _this.observers[id] = observer;
            return function () {
                // cleanup only our subscription and handle re subscription on the same stream id correctly
                if (_this.observers[id] === observer) {
                    delete _this.observers[id];
                }
            };
        });
        Object.assign(stream, {
            send: function (message) {
                _this.open().then(function (socket) {
                    var jsonMessage = JSON.stringify(__assign(__assign({ id: id }, message), (tokenStorage.token && { token: tokenStorage.token })));
                    socket.send(jsonMessage);
                });
            },
        });
        return stream;
    };
    /**
     * Map of all available connectors to their respective websocket connections
     */
    WebSocketConnector.websockets = {};
    return WebSocketConnector;
}());
exports.WebSocketConnector = WebSocketConnector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU29ja2V0Q29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2Nvbm5lY3Rvci9XZWJTb2NrZXRDb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQ0FBOEM7QUFDOUMsK0NBQThDO0FBQzlDLGlEQUE0RDtBQTZCNUQ7SUF5QkU7O09BRUc7SUFDSCw0QkFBWSxHQUFXO1FBdEJmLGNBQVMsR0FBMkQsRUFBRSxDQUFDO1FBRXZFLFdBQU0sR0FBOEIsSUFBSSxDQUFDO1FBcUIvQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBbEJEOzs7T0FHRztJQUNJLHlCQUFNLEdBQWIsVUFBYyxHQUFXO1FBQ3ZCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLFNBQVMsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQVNELGlDQUFJLEdBQUo7UUFBQSxpQkFzRUM7UUFyRUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBTSxRQUFNLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxJQUFJLGVBQWlDLENBQUM7WUFFdEMsSUFBTSx3QkFBc0IsR0FBRyxVQUFDLEtBQWtCO2dCQUNoRCw2RUFBNkU7Z0JBQzdFLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDcEIsSUFBSSxLQUFJLENBQUMsTUFBTSxLQUFLLGVBQWEsRUFBRTtvQkFDakMsT0FBTyxHQUFHLFFBQU0sQ0FBQyxVQUFVLEtBQUssQ0FBQyxD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