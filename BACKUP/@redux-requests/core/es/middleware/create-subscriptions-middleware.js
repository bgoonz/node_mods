import _extends from "@babel/runtime/helpers/extends";
import { mapObject } from '../helpers';
import { websocketOpened, websocketClosed, openWebsocket, closeWebsocket, getActionPayload } from '../actions';
import { GET_WEBSOCKET, STOP_SUBSCRIPTIONS, OPEN_WEBSOCKET, CLOSE_WEBSOCKET, WEBSOCKET_OPENED } from '../constants';
import createRequestsStore from './create-requests-store';

var shouldBeNormalized = function shouldBeNormalized(action, globalNormalize) {
  var _action$meta;

  return ((_action$meta = action.meta) == null ? void 0 : _action$meta.normalize) !== undefined ? action.meta.normalize : globalNormalize;
};

var transformIntoLocalMutation = function transformIntoLocalMutation(subscriptionAction, subscriptionData, message, globalNormalize) {
  var _subscriptionAction$m;

  var meta = {};

  if (shouldBeNormalized(subscriptionAction, globalNormalize)) {
    meta.localData = subscriptionData;
  }

  if ((_subscriptionAction$m = subscriptionAction.meta) != null && _subscriptionAction$m.mutations) {
    meta.mutations = mapObject(subscriptionAction.meta.mutations, function (k, v) {
      return {
        local: true,
        updateData: function updateData(data) {
          return v(data, subscriptionData, message);
        }
      };
    });
  }

  return {
    type: subscriptionAction.type + "_MUTATION",
    meta: meta
  };
};
/*
This wrapper is implemented to always call onClose when ws,close(1000) is called.
Sometimes onClose is not called at all in native implementation on network disconnection, sometimes it is called later.
Above makes things unpredictable.
Also it cleans all attached event handlers.
*/


var CleanableWebsocket = /*#__PURE__*/function () {
  function CleanableWebsocket(url, protocols, WS) {
    this.ws = new WS(url, protocols);
    this.onError = null;
    this.onOpen = null;
    this.onClose = null;
    this.onMessage = null;
    this.killed = false;
    this.sentMessages = this.ws.sentMessages;
  }

  var _proto = CleanableWebsocket.prototype;

  _proto.addEventListener = function addEventListener(type, callback) {
    var _this = this;

    if (type === 'error') {
      this.onError = callback;
    } else if (type === 'close') {
      // we make sure onClose could be called only once
      this.onClose = function (e) {
        if (!_this.killed) {
          _this.killed = true;
          callback(e);

          _this.removeAllListeners();
        }
      };
    } else if (type === 'open') {
      this.onOpen = callback;
    } else if (type === 'message') {
      this.onMessage = callback;
    }

    this.ws.addEventListener(type, type === 'close' ? this.onClose : callback);
  };

  _proto.removeAllListeners = function removeAllListeners() {
    if (this.onError) {
      this.ws.removeEventListener('error', this.onError);
    }

    if (this.onMessage) {
      this.ws.removeEventListener('message', this.onMessage);
    }

    if (this.onOpen) {
      this.ws.removeEventListener('open', this.onOpen);
    }

    if (this.onClose) {
      this.ws.removeEventListener('close', this.onClose);
    }
  };

  _proto.close = function close(code) {
    // for ws.close() we call onClose manually, to force this call always immediately
    if (this.onClose) {
      this.onClose({
        code: code
      });
    }

    this.ws.close(code);
  };

  _proto.send = function send(message) {
    this.ws.send(message);
  };

  _proto.sendToClient = function sendToClient(message) {
    this.ws.sendToClient(message);
  };

  _proto.open = function open() {
    this.ws.open();
  };

  _proto.error = function error(e) {
    this.ws.error(e);
  };

  return CleanableWebsocket;
}();

var getDefaultWebSocket = function getDefaultWebSocket() {
  return typeof WebSocket === 'undefined' ? undefined : WebSocket;
};

export default (function (_ref) {
  var _ref$normalize = _ref.normalize,
      normalize = _ref$normalize === void 0 ? false : _ref$normalize,
      _ref$subscriber = _ref.subscriber;
  _ref$subscriber = _ref$subscriber === void 0 ? {} : _ref$subscriber;
  var _ref$subscriber$WS = _ref$subscriber.WS,
      WS = _ref$subscriber$WS === void 0 ? getDefaultWebSocket() : _ref$subscriber$WS,
      url = _ref$subscriber.url,
      protocols = _ref$subscriber.protocols,
      onOpen = _ref$subscriber.onOpen,
      onClose = _ref$subscriber.onClose,
      onError = _ref$subscriber.onError,
      onMessage = _ref$subscriber.onMessage,
      onSend = _ref$subscriber.onSend,
      activateOn = _ref$subscriber.activateOn,
      getData = _ref$subscriber.getData,
      onStopSubscriptions = _ref$subscriber.onStopSubscriptions,
      _ref$subscriber$lazy = _ref$subscriber.lazy,
      lazy = _ref$subscriber$lazy === void 0 ? false : _ref$subscriber$lazy,
      isHeartbeatMessage = _ref$subscriber.isHeartbeatMessage,
      _ref$subscriber$heart = _ref$subscriber.heartbeatTimeout,
      heartbeatTimeout = _ref$subscriber$heart === void 0 ? 20 : _ref$subscriber$heart,
      _ref$subscriber$recon = _ref$subscriber.reconnectTimeout,
      reconnectTimeout = _ref$subscriber$recon === void 0 ? 5 : _ref$subscriber$recon;
  var subscriptions = {};
  var ws;
  var active = false;
  var lastHeartbeatTimeout = null;
  var lastReconnectTimeout = null;
  var lastOpenWebsocketAction = null;

  var clearLastReconnectTimeout = function clearLastReconnectTimeout() {
    if (lastReconnectTimeout) {
      clearTimeout(lastReconnectTimeout);
      lastReconnectTimeout = null;
    }
  };

  var clearLastHeartbeatTimeout = function clearLastHeartbeatTimeout() {
    if (lastHeartbeatTimeout) {
      clearTimeout(lastHeartbeatTimeout);
      lastHeartbeatTimeout = null;
    }
  };

  return function (store) {
    return function (next) {
      return function (action) {
        var _action$payload;

        if (action.type === OPEN_WEBSOCKET) {
          lastOpenWebsocketAction = action;
        }

        if (!ws && WS && url && !lazy || action.type === OPEN_WEBSOCKET) {
          var requestsStore = createRequestsStore(store);
          clearLastReconnectTimeout();
          clearLastHeartbeatTimeout();

          if (ws) {
            ws.close(1000);
          }

          ws = new CleanableWebsocket(url, protocols, WS);
          ws.addEventListener('open', function () {
            if (!activateOn) {
              store.dispatch(websocketOpened());
              active = true;
            }

            if (onOpen) {
              onOpen(requestsStore, ws, action.type === OPEN_WEBSOCKET ? action.props : null);
            }

            if (isHeartbeatMessage) {
              clearLastHeartbeatTimeout();
              lastHeartbeatTimeout = setTimeout(function () {
                store.dispatch(closeWebsocket(3000));
              }, heartbeatTimeout * 1000);
            }
          });
          ws.addEventListener('error', function (e) {
            if (onError) {
              onError(e, requestsStore, ws);
            }
          });
          ws.addEventListener('close', function (e) {
            store.dispatch(websocketClosed(e.code));
            active = false;
            clearLastReconnectTimeout();
            clearLastHeartbeatTimeout();

            if (onClose) {
              onClose(e, requestsStore, ws);
            }

            if (e.code !== 1000 && reconnectTimeout) {
              lastReconnectTimeout = setTimeout(function () {
                store.dispatch(lastOpenWebsocketAction ? action : openWebsocket());
              }, reconnectTimeout * 1000);
            }
          });
          ws.addEventListener('message', function (message) {
            if (!active && activateOn && activateOn(message)) {
              store.dispatch(websocketOpened());
              active = true;
            }

            if (isHeartbeatMessage && isHeartbeatMessage(message)) {
              clearLastHeartbeatTimeout();
              lastHeartbeatTimeout = setTimeout(function () {
                store.dispatch(closeWebsocket(3000));
              }, heartbeatTimeout * 1000);
            }

            var data = JSON.parse(message.data);

            if (getData) {
              data = getData(data);
            }

            if (onMessage) {
              onMessage(data, message, requestsStore);
            }

            var subscription = subscriptions[data.type];

            if (subscription) {
              var _subscription$meta, _subscription$meta2, _subscription$meta3;

              if ((_subscription$meta = subscription.meta) != null && _subscription$meta.getData) {
                data = subscription.meta.getData(data);
              }

              if ((_subscription$meta2 = subscription.meta) != null && _subscription$meta2.onMessage) {
                subscription.meta.onMessage(data, message, requestsStore);
              }

              if ((_subscription$meta3 = subscription.meta) != null && _subscription$meta3.mutations || shouldBeNormalized(subscription, normalize)) {
                store.dispatch(transformIntoLocalMutation(subscription, data, message, normalize));
              }
            }
          });
        }

        if (action.type === GET_WEBSOCKET) {
          return ws;
        }

        if (ws && action.type === CLOSE_WEBSOCKET) {
          clearLastReconnectTimeout();
          clearLastHeartbeatTimeout();
          var response = next(action);
          ws.close(action.code);
          ws = null;
          return response;
        } else if (action.type === WEBSOCKET_OPENED) {
          Object.values(subscriptions).forEach(function (subscriptionAction) {
            var actionPayload = getActionPayload(subscriptionAction);

            if (actionPayload.subscription) {
              ws.send(JSON.stringify(onSend ? onSend(actionPayload.subscription, subscriptionAction) : actionPayload.subscription));
            }
          });
        } else if (action.type === STOP_SUBSCRIPTIONS) {
          var _requestsStore = createRequestsStore(store);

          if (!action.subscriptions) {
            if (onStopSubscriptions) {
              onStopSubscriptions(Object.keys(subscriptions), action, ws, _requestsStore);
            }

            subscriptions = {};
          } else {
            if (onStopSubscriptions) {
              onStopSubscriptions(action.subscriptions, action, ws, _requestsStore);
            }

            subscriptions = mapObject(subscriptions, function (k, v) {
              return action.subscriptions.includes(k) ? undefined : v;
            });
          }
        } else if (action.subscription !== undefined || ((_action$payload = action.payload) == null ? void 0 : _action$payload.subscription) !== undefined) {
          var _action$meta2, _action$meta3;

          if ((_action$meta2 = action.meta) != null && _action$meta2.onMessage || (_action$meta3 = action.meta) != null && _action$meta3.mutations || shouldBeNormalized(action, normalize)) {
            var _action$meta4, _extends2;

            subscriptions = _extends({}, subscriptions, (_extends2 = {}, _extends2[action.type + (((_action$meta4 = action.meta) == null ? void 0 : _action$meta4.requestKey) || '')] = action, _extends2));
          }

          var actionPayload = getActionPayload(action);

          if (actionPayload.subscription && ws && active) {
            ws.send(JSON.stringify(onSend ? onSend(actionPayload.subscription, action) : actionPayload.subscription));
          }
        }

        return next(action);
      };
    };
  };
});