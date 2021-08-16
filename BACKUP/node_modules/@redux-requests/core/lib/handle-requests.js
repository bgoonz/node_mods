"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _reducers = require("./reducers");

var _middleware = require("./middleware");

var _defaultConfig = _interopRequireDefault(require("./default-config"));

var defer = function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};

var handleRequests = function handleRequests(userConfig) {
  var config = (0, _extends2["default"])({}, _defaultConfig["default"], userConfig);
  var requestsPromise = config.ssr === 'server' && !config.disableRequestsPromise ? defer() : null;
  return {
    requestsReducer: (0, _reducers.requestsReducer)(config),
    requestsMiddleware: [config.ssr !== 'server' && config.subscriber && (0, _middleware.createSubscriptionsMiddleware)(config), config.ssr !== 'server' && (0, _middleware.createPollingMiddleware)(config), config.ssr === 'server' && !config.disableRequestsPromise && (0, _middleware.createServerSsrMiddleware)(requestsPromise, config), config.ssr === 'client' && (0, _middleware.createClientSsrMiddleware)(config), config.cache && (0, _middleware.createRequestsCacheMiddleware)(config), (0, _middleware.createSendRequestsMiddleware)(config)].filter(Boolean),
    requestsPromise: requestsPromise
  };
};

var _default = handleRequests;
exports["default"] = _default;