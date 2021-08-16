(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reselect"));
	else if(typeof define === 'function' && define.amd)
		define(["reselect"], factory);
	else if(typeof exports === 'object')
		exports["ReduxRequests"] = factory(require("reselect"));
	else
		root["ReduxRequests"] = factory(root["Reselect"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_reselect__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@babel/runtime/helpers/extends.js":
/*!************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/extends.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 2:2-16 */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 16:0-14 */
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/*! namespace exports */
/*! export abort [provided] [no usage info] [missing usage info prevents renaming] */
/*! export abortRequests [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addWatcher [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clearRequestsCache [provided] [no usage info] [missing usage info prevents renaming] */
/*! export closeWebsocket [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createAbortAction [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createErrorAction [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createSuccessAction [provided] [no usage info] [missing usage info prevents renaming] */
/*! export error [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getActionPayload [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRequestActionFromResponse [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getResponseFromSuccessAction [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getWebsocket [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isAbortAction [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isErrorAction [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isRequestAction [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isRequestActionQuery [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isResponseAction [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isSuccessAction [provided] [no usage info] [missing usage info prevents renaming] */
/*! export joinRequest [provided] [no usage info] [missing usage info prevents renaming] */
/*! export openWebsocket [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeWatcher [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resetRequests [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setDownloadProgress [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setUploadProgress [provided] [no usage info] [missing usage info prevents renaming] */
/*! export stopPolling [provided] [no usage info] [missing usage info prevents renaming] */
/*! export stopSubscriptions [provided] [no usage info] [missing usage info prevents renaming] */
/*! export success [provided] [no usage info] [missing usage info prevents renaming] */
/*! export websocketClosed [provided] [no usage info] [missing usage info prevents renaming] */
/*! export websocketOpened [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "success": () => /* binding */ success,
/* harmony export */   "error": () => /* binding */ error,
/* harmony export */   "abort": () => /* binding */ abort,
/* harmony export */   "createSuccessAction": () => /* binding */ createSuccessAction,
/* harmony export */   "createErrorAction": () => /* binding */ createErrorAction,
/* harmony export */   "createAbortAction": () => /* binding */ createAbortAction,
/* harmony export */   "getActionPayload": () => /* binding */ getActionPayload,
/* harmony export */   "getResponseFromSuccessAction": () => /* binding */ getResponseFromSuccessAction,
/* harmony export */   "isRequestAction": () => /* binding */ isRequestAction,
/* harmony export */   "isResponseAction": () => /* binding */ isResponseAction,
/* harmony export */   "getRequestActionFromResponse": () => /* binding */ getRequestActionFromResponse,
/* harmony export */   "isSuccessAction": () => /* binding */ isSuccessAction,
/* harmony export */   "isErrorAction": () => /* binding */ isErrorAction,
/* harmony export */   "isAbortAction": () => /* binding */ isAbortAction,
/* harmony export */   "isRequestActionQuery": () => /* binding */ isRequestActionQuery,
/* harmony export */   "clearRequestsCache": () => /* binding */ clearRequestsCache,
/* harmony export */   "resetRequests": () => /* binding */ resetRequests,
/* harmony export */   "abortRequests": () => /* binding */ abortRequests,
/* harmony export */   "stopPolling": () => /* binding */ stopPolling,
/* harmony export */   "setDownloadProgress": () => /* binding */ setDownloadProgress,
/* harmony export */   "setUploadProgress": () => /* binding */ setUploadProgress,
/* harmony export */   "addWatcher": () => /* binding */ addWatcher,
/* harmony export */   "removeWatcher": () => /* binding */ removeWatcher,
/* harmony export */   "joinRequest": () => /* binding */ joinRequest,
/* harmony export */   "websocketOpened": () => /* binding */ websocketOpened,
/* harmony export */   "websocketClosed": () => /* binding */ websocketClosed,
/* harmony export */   "getWebsocket": () => /* binding */ getWebsocket,
/* harmony export */   "openWebsocket": () => /* binding */ openWebsocket,
/* harmony export */   "closeWebsocket": () => /* binding */ closeWebsocket,
/* harmony export */   "stopSubscriptions": () => /* binding */ stopSubscriptions
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



var getActionWithSuffix = function getActionWithSuffix(suffix) {
  return function (actionType) {
    return actionType + suffix;
  };
};

var success = getActionWithSuffix(_constants__WEBPACK_IMPORTED_MODULE_1__.SUCCESS_SUFFIX);
var error = getActionWithSuffix(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_SUFFIX);
var abort = getActionWithSuffix(_constants__WEBPACK_IMPORTED_MODULE_1__.ABORT_SUFFIX);

var isFSA = function isFSA(action) {
  return !!action.payload;
};

var createSuccessAction = function createSuccessAction(action, response) {
  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    type: success(action.type)
  }, isFSA(action) ? {
    payload: response
  } : {
    response: response
  }, {
    meta: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action.meta, {
      requestAction: action
    })
  });
};
var createErrorAction = function createErrorAction(action, errorData) {
  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    type: error(action.type)
  }, isFSA(action) ? {
    payload: errorData,
    error: true
  } : {
    error: errorData
  }, {
    meta: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action.meta, {
      requestAction: action
    })
  });
};
var createAbortAction = function createAbortAction(action) {
  return {
    type: abort(action.type),
    meta: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action.meta, {
      requestAction: action
    })
  };
};
var getActionPayload = function getActionPayload(action) {
  return action.payload === undefined ? action : action.payload;
}; // eslint-disable-next-line import/no-unused-modules

var getResponseFromSuccessAction = function getResponseFromSuccessAction(action) {
  return action.payload ? action.payload : action.response;
};
var isRequestAction = function isRequestAction(action) {
  var actionPayload = getActionPayload(action);
  return !!(actionPayload != null && actionPayload.request) && !!(Array.isArray(actionPayload.request) || actionPayload.request.url || actionPayload.request.query || actionPayload.request.promise || actionPayload.request.response || actionPayload.request.error) && !actionPayload.response && !(actionPayload instanceof Error);
};
var isResponseAction = function isResponseAction(action) {
  var _action$meta;

  return !!((_action$meta = action.meta) != null && _action$meta.requestAction);
};
var getRequestActionFromResponse = function getRequestActionFromResponse(action) {
  return action.meta.requestAction;
};
var isSuccessAction = function isSuccessAction(action) {
  return isResponseAction(action) && action.type.endsWith(_constants__WEBPACK_IMPORTED_MODULE_1__.SUCCESS_SUFFIX);
};
var isErrorAction = function isErrorAction(action) {
  return isResponseAction(action) && action.type.endsWith(_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_SUFFIX);
};
var isAbortAction = function isAbortAction(action) {
  return isResponseAction(action) && action.type.endsWith(_constants__WEBPACK_IMPORTED_MODULE_1__.ABORT_SUFFIX);
};

var isRequestQuery = function isRequestQuery(request) {
  return !request.query && (!request.method || request.method.toLowerCase() === 'get') || request.query && !request.query.trim().startsWith('mutation');
};

var isRequestActionQuery = function isRequestActionQuery(action) {
  var _action$meta2;

  var _getActionPayload = getActionPayload(action),
      request = _getActionPayload.request;

  if (((_action$meta2 = action.meta) == null ? void 0 : _action$meta2.asMutation) !== undefined) {
    return !action.meta.asMutation;
  }

  return !!(Array.isArray(request) ? request.every(isRequestQuery) : isRequestQuery(request));
};
var clearRequestsCache = function clearRequestsCache(requests) {
  if (requests === void 0) {
    requests = null;
  }

  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.CLEAR_REQUESTS_CACHE,
    requests: requests
  };
};
var resetRequests = function resetRequests(requests, abortPending, resetCached) {
  if (requests === void 0) {
    requests = null;
  }

  if (abortPending === void 0) {
    abortPending = true;
  }

  if (resetCached === void 0) {
    resetCached = true;
  }

  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.RESET_REQUESTS,
    requests: requests,
    abortPending: abortPending,
    resetCached: resetCached
  };
};
var abortRequests = function abortRequests(requests) {
  if (requests === void 0) {
    requests = null;
  }

  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.ABORT_REQUESTS,
    requests: requests
  };
};
var stopPolling = function stopPolling(requests) {
  if (requests === void 0) {
    requests = null;
  }

  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.STOP_POLLING,
    requests: requests
  };
};
var setDownloadProgress = function setDownloadProgress(requestType, progress) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.SET_DOWNLOAD_PROGRESS,
    requestType: requestType,
    progress: progress
  };
};
var setUploadProgress = function setUploadProgress(requestType, progress) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.SET_UPLOAD_PROGRESS,
    requestType: requestType,
    progress: progress
  };
};
var addWatcher = function addWatcher(requestType) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.ADD_WATCHER,
    requestType: requestType
  };
};
var removeWatcher = function removeWatcher(requestType) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.REMOVE_WATCHER,
    requestType: requestType
  };
};
var joinRequest = function joinRequest(requestType, rehydrate) {
  if (rehydrate === void 0) {
    rehydrate = false;
  }

  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.JOIN_REQUEST,
    requestType: requestType,
    rehydrate: rehydrate
  };
};
var websocketOpened = function websocketOpened() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.WEBSOCKET_OPENED
  };
};
var websocketClosed = function websocketClosed(code) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.WEBSOCKET_CLOSED,
    code: code
  };
};
var getWebsocket = function getWebsocket() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.GET_WEBSOCKET
  };
};
var openWebsocket = function openWebsocket(props) {
  if (props === void 0) {
    props = null;
  }

  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.OPEN_WEBSOCKET,
    props: props
  };
};
var closeWebsocket = function closeWebsocket(code) {
  if (code === void 0) {
    code = 1000;
  }

  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.CLOSE_WEBSOCKET,
    code: code
  };
};
var stopSubscriptions = function stopSubscriptions(subscriptions) {
  if (subscriptions === void 0) {
    subscriptions = null;
  }

  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__.STOP_SUBSCRIPTIONS,
    subscriptions: subscriptions
  };
};

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! namespace exports */
/*! export ABORT_REQUESTS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ABORT_SUFFIX [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ADD_WATCHER [provided] [no usage info] [missing usage info prevents renaming] */
/*! export CLEAR_REQUESTS_CACHE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export CLOSE_WEBSOCKET [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ERROR_SUFFIX [provided] [no usage info] [missing usage info prevents renaming] */
/*! export GET_WEBSOCKET [provided] [no usage info] [missing usage info prevents renaming] */
/*! export JOIN_REQUEST [provided] [no usage info] [missing usage info prevents renaming] */
/*! export OPEN_WEBSOCKET [provided] [no usage info] [missing usage info prevents renaming] */
/*! export REMOVE_WATCHER [provided] [no usage info] [missing usage info prevents renaming] */
/*! export RESET_REQUESTS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SET_DOWNLOAD_PROGRESS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SET_UPLOAD_PROGRESS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export STOP_POLLING [provided] [no usage info] [missing usage info prevents renaming] */
/*! export STOP_SUBSCRIPTIONS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SUCCESS_SUFFIX [provided] [no usage info] [missing usage info prevents renaming] */
/*! export WEBSOCKET_CLOSED [provided] [no usage info] [missing usage info prevents renaming] */
/*! export WEBSOCKET_OPENED [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SUCCESS_SUFFIX": () => /* binding */ SUCCESS_SUFFIX,
/* harmony export */   "ERROR_SUFFIX": () => /* binding */ ERROR_SUFFIX,
/* harmony export */   "ABORT_SUFFIX": () => /* binding */ ABORT_SUFFIX,
/* harmony export */   "CLEAR_REQUESTS_CACHE": () => /* binding */ CLEAR_REQUESTS_CACHE,
/* harmony export */   "RESET_REQUESTS": () => /* binding */ RESET_REQUESTS,
/* harmony export */   "ABORT_REQUESTS": () => /* binding */ ABORT_REQUESTS,
/* harmony export */   "SET_DOWNLOAD_PROGRESS": () => /* binding */ SET_DOWNLOAD_PROGRESS,
/* harmony export */   "SET_UPLOAD_PROGRESS": () => /* binding */ SET_UPLOAD_PROGRESS,
/* harmony export */   "ADD_WATCHER": () => /* binding */ ADD_WATCHER,
/* harmony export */   "REMOVE_WATCHER": () => /* binding */ REMOVE_WATCHER,
/* harmony export */   "JOIN_REQUEST": () => /* binding */ JOIN_REQUEST,
/* harmony export */   "STOP_POLLING": () => /* binding */ STOP_POLLING,
/* harmony export */   "WEBSOCKET_OPENED": () => /* binding */ WEBSOCKET_OPENED,
/* harmony export */   "WEBSOCKET_CLOSED": () => /* binding */ WEBSOCKET_CLOSED,
/* harmony export */   "GET_WEBSOCKET": () => /* binding */ GET_WEBSOCKET,
/* harmony export */   "OPEN_WEBSOCKET": () => /* binding */ OPEN_WEBSOCKET,
/* harmony export */   "CLOSE_WEBSOCKET": () => /* binding */ CLOSE_WEBSOCKET,
/* harmony export */   "STOP_SUBSCRIPTIONS": () => /* binding */ STOP_SUBSCRIPTIONS
/* harmony export */ });
var SUCCESS_SUFFIX = '_SUCCESS';
var ERROR_SUFFIX = '_ERROR';
var ABORT_SUFFIX = '_ABORT';
var CLEAR_REQUESTS_CACHE = 'CLEAR_REQUESTS_CACHE';
var RESET_REQUESTS = 'RESET_REQUESTS';
var ABORT_REQUESTS = 'ABORT_REQUESTS';
var SET_DOWNLOAD_PROGRESS = 'SET_DOWNLOAD_PROGRESS';
var SET_UPLOAD_PROGRESS = 'SET_UPLOAD_PROGRESS';
var ADD_WATCHER = 'ADD_WATCHER';
var REMOVE_WATCHER = 'REMOVE_WATCHER';
var JOIN_REQUEST = 'JOIN_REQUEST';
var STOP_POLLING = 'STOP_POLLING';
var WEBSOCKET_OPENED = 'WEBSOCKET_OPENED';
var WEBSOCKET_CLOSED = 'WEBSOCKET_CLOSED';
var GET_WEBSOCKET = 'GET_WEBSOCKET';
var OPEN_WEBSOCKET = 'OPEN_WEBSOCKET';
var CLOSE_WEBSOCKET = 'CLOSE_WEBSOCKET';
var STOP_SUBSCRIPTIONS = 'STOP_SUBSCRIPTIONS';

/***/ }),

/***/ "./src/default-config.js":
/*!*******************************!*\
  !*** ./src/default-config.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/actions.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  driver: null,
  onRequest: null,
  onSuccess: null,
  onError: null,
  onAbort: null,
  cache: false,
  ssr: null,
  disableRequestsPromise: false,
  isRequestAction: _actions__WEBPACK_IMPORTED_MODULE_0__.isRequestAction,
  isRequestActionQuery: _actions__WEBPACK_IMPORTED_MODULE_0__.isRequestActionQuery,
  takeLatest: _actions__WEBPACK_IMPORTED_MODULE_0__.isRequestActionQuery,
  normalize: false,
  getNormalisationObjectKey: function getNormalisationObjectKey(obj) {
    return obj.id;
  },
  shouldObjectBeNormalized: function shouldObjectBeNormalized(obj) {
    return obj.id !== undefined;
  },
  subscriber: null
});

/***/ }),

/***/ "./src/handle-requests.js":
/*!********************************!*\
  !*** ./src/handle-requests.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./src/reducers/requests-reducer.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middleware */ "./src/middleware/create-subscriptions-middleware.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware */ "./src/middleware/create-polling-middleware.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middleware */ "./src/middleware/create-server-ssr-middleware.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middleware */ "./src/middleware/create-client-ssr-middleware.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middleware */ "./src/middleware/create-requests-cache-middleware.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middleware */ "./src/middleware/create-send-requests-middleware.js");
/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-config */ "./src/default-config.js");





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
  var config = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _default_config__WEBPACK_IMPORTED_MODULE_1__.default, userConfig);

  var requestsPromise = config.ssr === 'server' && !config.disableRequestsPromise ? defer() : null;
  return {
    requestsReducer: (0,_reducers__WEBPACK_IMPORTED_MODULE_2__.default)(config),
    requestsMiddleware: [config.ssr !== 'server' && config.subscriber && (0,_middleware__WEBPACK_IMPORTED_MODULE_3__.default)(config), config.ssr !== 'server' && (0,_middleware__WEBPACK_IMPORTED_MODULE_4__.default)(config), config.ssr === 'server' && !config.disableRequestsPromise && (0,_middleware__WEBPACK_IMPORTED_MODULE_5__.default)(requestsPromise, config), config.ssr === 'client' && (0,_middleware__WEBPACK_IMPORTED_MODULE_6__.default)(config), config.cache && (0,_middleware__WEBPACK_IMPORTED_MODULE_7__.default)(config), (0,_middleware__WEBPACK_IMPORTED_MODULE_8__.default)(config)].filter(Boolean),
    requestsPromise: requestsPromise
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleRequests);

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! namespace exports */
/*! export mapObject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export mapRequest [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapRequest": () => /* binding */ mapRequest,
/* harmony export */   "mapObject": () => /* binding */ mapObject
/* harmony export */ });
var mapRequest = function mapRequest(request, callback) {
  return Array.isArray(request) ? request.map(callback) : callback(request);
};
var mapObject = function mapObject(obj, callback) {
  return Object.entries(obj).reduce(function (prev, _ref) {
    var k = _ref[0],
        v = _ref[1];
    var newValue = callback(k, v);

    if (newValue === undefined) {
      return prev;
    }

    prev[k] = newValue;
    return prev;
  }, {});
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export abort [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .abort */
/*! export abortRequests [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .abortRequests */
/*! export addWatcher [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .addWatcher */
/*! export clearRequestsCache [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .clearRequestsCache */
/*! export closeWebsocket [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .closeWebsocket */
/*! export createRequestsStore [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/middleware/create-requests-store.js .default */
/*! export error [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .error */
/*! export getMutation [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/selectors/get-mutation.js .default */
/*! export getMutationSelector [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/selectors/get-mutation-selector.js .default */
/*! export getQuery [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/selectors/get-query.js .default */
/*! export getQuerySelector [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/selectors/get-query-selector.js .default */
/*! export getWebsocketState [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/selectors/get-websocket-state.js .default */
/*! export handleRequests [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/handle-requests.js .default */
/*! export isRequestAction [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .isRequestAction */
/*! export isRequestActionQuery [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .isRequestActionQuery */
/*! export isResponseAction [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .isResponseAction */
/*! export joinRequest [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .joinRequest */
/*! export openWebsocket [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .openWebsocket */
/*! export removeWatcher [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .removeWatcher */
/*! export resetRequests [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .resetRequests */
/*! export stopPolling [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .stopPolling */
/*! export stopSubscriptions [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .stopSubscriptions */
/*! export success [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] -> ./src/actions.js .success */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "success": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.success,
/* harmony export */   "error": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.error,
/* harmony export */   "abort": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.abort,
/* harmony export */   "clearRequestsCache": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.clearRequestsCache,
/* harmony export */   "resetRequests": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.resetRequests,
/* harmony export */   "stopPolling": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.stopPolling,
/* harmony export */   "abortRequests": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.abortRequests,
/* harmony export */   "isRequestActionQuery": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.isRequestActionQuery,
/* harmony export */   "isRequestAction": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.isRequestAction,
/* harmony export */   "isResponseAction": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.isResponseAction,
/* harmony export */   "addWatcher": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.addWatcher,
/* harmony export */   "removeWatcher": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.removeWatcher,
/* harmony export */   "joinRequest": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.joinRequest,
/* harmony export */   "stopSubscriptions": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.stopSubscriptions,
/* harmony export */   "openWebsocket": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.openWebsocket,
/* harmony export */   "closeWebsocket": () => /* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.closeWebsocket,
/* harmony export */   "handleRequests": () => /* reexport safe */ _handle_requests__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "getQuery": () => /* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "getMutation": () => /* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_3__.default,
/* harmony export */   "getQuerySelector": () => /* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_4__.default,
/* harmony export */   "getMutationSelector": () => /* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_5__.default,
/* harmony export */   "getWebsocketState": () => /* reexport safe */ _selectors__WEBPACK_IMPORTED_MODULE_6__.default,
/* harmony export */   "createRequestsStore": () => /* reexport safe */ _middleware__WEBPACK_IMPORTED_MODULE_7__.default
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/actions.js");
/* harmony import */ var _handle_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handle-requests */ "./src/handle-requests.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/selectors/get-query.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/selectors/get-mutation.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./src/selectors/get-query-selector.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ "./src/selectors/get-mutation-selector.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectors */ "./src/selectors/get-websocket-state.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middleware */ "./src/middleware/create-requests-store.js");





/***/ }),

/***/ "./src/middleware/create-client-ssr-middleware.js":
/*!********************************************************!*\
  !*** ./src/middleware/create-client-ssr-middleware.js ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../default-config */ "./src/default-config.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectors */ "./src/selectors/get-query.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (config) {
  if (config === void 0) {
    config = _default_config__WEBPACK_IMPORTED_MODULE_1__.default;
  }

  return function (store) {
    return function (next) {
      return function (action) {
        var _action$meta2;

        if (!config.isRequestAction(action)) {
          return next(action);
        }

        var state = store.getState();
        var actionsToIgnore = state.requests.ssr;
        var actionToIgnore = actionsToIgnore.find(function (v) {
          var _action$meta;

          return (v.requestType || v) === action.type + (((_action$meta = action.meta) == null ? void 0 : _action$meta.requestKey) || '');
        });

        if (!actionToIgnore) {
          return next(action);
        }

        var query = (0,_selectors__WEBPACK_IMPORTED_MODULE_2__.default)(state, {
          type: action.type,
          requestKey: (_action$meta2 = action.meta) == null ? void 0 : _action$meta2.requestKey
        });
        action.meta = actionToIgnore.duplicate ? _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action.meta, {
          ssrDuplicate: true
        }) : action.meta;

        if (query.error) {
          return next(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action, {
            meta: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action.meta, {
              ssrError: query.error
            })
          }));
        }

        return next(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action, {
          meta: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action.meta, {
            ssrResponse: {
              data: query.data
            }
          })
        }));
      };
    };
  };
});

/***/ }),

/***/ "./src/middleware/create-polling-middleware.js":
/*!*****************************************************!*\
  !*** ./src/middleware/create-polling-middleware.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../default-config */ "./src/default-config.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.js");




var getIntervalKey = function getIntervalKey(action) {
  var _action$meta;

  return action.type + (((_action$meta = action.meta) == null ? void 0 : _action$meta.requestKey) || '');
};

var getKeys = function getKeys(requests) {
  return requests.map(function (v) {
    return typeof v === 'object' ? v.requestType.toString() + (v.requestKey || '') : v.toString();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (config) {
  if (config === void 0) {
    config = _default_config__WEBPACK_IMPORTED_MODULE_1__.default;
  }

  var intervals = {};
  return function (store) {
    return function (next) {
      return function (action) {
        var _action$meta2, _action$meta3;

        if (action.type === _constants__WEBPACK_IMPORTED_MODULE_2__.STOP_POLLING || action.type === _constants__WEBPACK_IMPORTED_MODULE_2__.RESET_REQUESTS) {
          if (!action.requests) {
            Object.values(intervals).forEach(clearInterval);
            intervals = {};
          } else {
            var keys = getKeys(action.requests);

            var intervalsCopy = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, intervals);

            keys.forEach(function (k) {
              clearInterval(intervalsCopy[k]);
              delete intervalsCopy[k];
            });
            intervals = intervalsCopy;
          }
        } else if (config.isRequestAction(action) && config.isRequestActionQuery(action) && !((_action$meta2 = action.meta) != null && _action$meta2.polled) && intervals[getIntervalKey(action)]) {
          var _intervalsCopy = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, intervals);

          clearInterval(intervals[getIntervalKey(action)]);
          delete _intervalsCopy[getIntervalKey(action)];
          intervals = _intervalsCopy;
        }

        if (config.isRequestAction(action) && config.isRequestActionQuery(action) && (_action$meta3 = action.meta) != null && _action$meta3.poll && !action.meta.polled) {
          intervals[getIntervalKey(action)] = setInterval(function () {
            store.dispatch(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action, {
              meta: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action.meta, {
                polled: true
              })
            }));
          }, action.meta.poll * 1000);
        }

        return next(action);
      };
    };
  };
});

/***/ }),

/***/ "./src/middleware/create-requests-cache-middleware.js":
/*!************************************************************!*\
  !*** ./src/middleware/create-requests-cache-middleware.js ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../default-config */ "./src/default-config.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectors */ "./src/selectors/get-query.js");




var isCacheValid = function isCacheValid(cache, action) {
  return cache.cacheKey === action.meta.cacheKey && (cache.timeout === null || Date.now() <= cache.timeout);
};

var getKey = function getKey(action) {
  return action.type + (action.meta.requestKey || '');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (config) {
  if (config === void 0) {
    config = _default_config__WEBPACK_IMPORTED_MODULE_1__.default;
  }

  return function (store) {
    return function (next) {
      return function (action) {
        var _action$meta;

        if (config.isRequestAction(action) && (_action$meta = action.meta) != null && _action$meta.cache && !action.meta.ssrResponse) {
          var key = getKey(action);
          var state = store.getState();
          var cacheValue = state.requests.cache[key];

          if (cacheValue !== undefined && isCacheValid(cacheValue, action)) {
            var _action$meta2;

            var query = (0,_selectors__WEBPACK_IMPORTED_MODULE_2__.default)(state, {
              type: action.type,
              requestKey: (_action$meta2 = action.meta) == null ? void 0 : _action$meta2.requestKey
            });
            return next(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action, {
              meta: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action.meta, {
                cacheResponse: {
                  data: query.data
                }
              })
            }));
          }
        }

        return next(action);
      };
    };
  };
});

/***/ }),

/***/ "./src/middleware/create-requests-store.js":
/*!*************************************************!*\
  !*** ./src/middleware/create-requests-store.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (store) {
  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, store, {
    dispatchRequest: store.dispatch
  });
});

/***/ }),

/***/ "./src/middleware/create-send-requests-middleware.js":
/*!***********************************************************!*\
  !*** ./src/middleware/create-send-requests-middleware.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectors */ "./src/selectors/get-query.js");
/* harmony import */ var _create_requests_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-requests-store */ "./src/middleware/create-requests-store.js");






var getRequestTypeString = function getRequestTypeString(requestType) {
  return typeof requestType === 'function' ? requestType.toString() : requestType;
};

var getKeys = function getKeys(requests) {
  return requests.map(function (v) {
    return typeof v === 'object' ? getRequestTypeString(v.requestType) + (v.requestKey || '') : getRequestTypeString(v);
  });
};

var getDriver = function getDriver(config, action) {
  var _action$meta;

  return (_action$meta = action.meta) != null && _action$meta.driver ? config.driver[action.meta.driver] : config.driver["default"] || config.driver;
};

var getLastActionKey = function getLastActionKey(action) {
  var _action$meta2;

  return action.type + ((_action$meta2 = action.meta) != null && _action$meta2.requestKey ? action.meta.requestKey : '');
};

var isActionRehydrated = function isActionRehydrated(action) {
  var _action$meta3, _action$meta4, _action$meta5;

  return !!((_action$meta3 = action.meta) != null && _action$meta3.cacheResponse || (_action$meta4 = action.meta) != null && _action$meta4.ssrResponse || (_action$meta5 = action.meta) != null && _action$meta5.ssrError);
}; // TODO: remove to more functional style, we need object maps and filters


var abortPendingRequests = function abortPendingRequests(action, pendingRequests) {
  var payload = (0,_actions__WEBPACK_IMPORTED_MODULE_1__.getActionPayload)(action);
  var clearAll = !payload.requests;
  var keys = !clearAll && getKeys(payload.requests);

  if (!payload.requests) {
    Object.values(pendingRequests).forEach(function (requests) {
      return requests.forEach(function (r) {
        return r.cancel();
      });
    });
  } else {
    Object.entries(pendingRequests).filter(function (_ref) {
      var k = _ref[0];
      return keys.includes(k);
    }).forEach(function (_ref2) {
      var requests = _ref2[1];
      return requests.forEach(function (r) {
        return r.cancel();
      });
    });
  }
};

var isTakeLatest = function isTakeLatest(action, config) {
  var _action$meta6;

  return ((_action$meta6 = action.meta) == null ? void 0 : _action$meta6.takeLatest) !== undefined ? action.meta.takeLatest : typeof config.takeLatest === 'function' ? config.takeLatest(action) : config.takeLatest;
};

var maybeCallOnRequestInterceptor = function maybeCallOnRequestInterceptor(action, config, store) {
  var payload = (0,_actions__WEBPACK_IMPORTED_MODULE_1__.getActionPayload)(action);

  if (config.onRequest && (!action.meta || action.meta.runOnRequest !== false && !action.meta.ssrDuplicate)) {
    if (action.request) {
      return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action, {
        request: config.onRequest(payload.request, action, store)
      });
    }

    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action, {
      payload: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action.payload, {
        request: config.onRequest(payload.request, action, store)
      })
    });
  }

  return action;
};

var maybeCallOnRequestMeta = function maybeCallOnRequestMeta(action, store) {
  var _action$meta7;

  var payload = (0,_actions__WEBPACK_IMPORTED_MODULE_1__.getActionPayload)(action);

  if ((_action$meta7 = action.meta) != null && _action$meta7.onRequest && !action.meta.ssrDuplicate) {
    if (action.request) {
      return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action, {
        request: action.meta.onRequest(payload.request, action, store)
      });
    }

    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action, {
      payload: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, action.payload, {
        request: action.meta.onRequest(payload.request, action, store)
      })
    });
  }

  return action;
};

var maybeDispatchRequestAction = function maybeDispatchRequestAction(action, next) {
  if (!action.meta || !action.meta.silent) {
    action = next(action);
  }

  return action;
};

var getDriverActions = function getDriverActions(action, store) {
  var _action$meta8, _action$meta10;

  var driverActions = {};

  if ((_action$meta8 = action.meta) != null && _action$meta8.measureDownloadProgress) {
    driverActions.setDownloadProgress = function (progress) {
      var _action$meta9;

      return store.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.setDownloadProgress)(action.type + (((_action$meta9 = action.meta) == null ? void 0 : _action$meta9.requestKey) || ''), progress));
    };
  }

  if ((_action$meta10 = action.meta) != null && _action$meta10.measureUploadProgress) {
    driverActions.setUploadProgress = function (progress) {
      var _action$meta11;

      return store.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_1__.setUploadProgress)(action.type + (((_action$meta11 = action.meta) == null ? void 0 : _action$meta11.requestKey) || ''), progress));
    };
  }

  return driverActions;
}; // TODO: move to helpers


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

var getResponsePromises = function getResponsePromises(action, config, pendingRequests, store) {
  var _action$meta12, _action$meta13, _action$meta14;

  var actionPayload = (0,_actions__WEBPACK_IMPORTED_MODULE_1__.getActionPayload)(action);
  var isBatchedRequest = Array.isArray(actionPayload.request);

  if ((_action$meta12 = action.meta) != null && _action$meta12.cacheResponse) {
    return [Promise.resolve(action.meta.cacheResponse)];
  } else if ((_action$meta13 = action.meta) != null && _action$meta13.ssrResponse) {
    return [Promise.resolve(action.meta.ssrResponse)];
  } else if ((_action$meta14 = action.meta) != null && _action$meta14.ssrError) {
    return [Promise.reject(action.meta.ssrError)];
  }

  var driverActions = isBatchedRequest ? {} : getDriverActions(action, store);
  var driver = getDriver(config, action);
  var lastActionKey = getLastActionKey(action);
  var takeLatest = isTakeLatest(action, config);

  if (takeLatest && pendingRequests[lastActionKey]) {
    pendingRequests[lastActionKey].forEach(function (r) {
      return r.cancel();
    });
  }

  var responsePromises = isBatchedRequest ? actionPayload.request.map(function (r) {
    return driver(r, action, driverActions);
  }) : [driver(actionPayload.request, action, driverActions)];

  if (responsePromises[0].cancel) {
    pendingRequests[lastActionKey] = responsePromises;
  }

  return responsePromises;
};

var maybeCallGetError = function maybeCallGetError(action, error) {
  var _action$meta15;

  if (error !== 'REQUEST_ABORTED' && !isActionRehydrated(action) && (_action$meta15 = action.meta) != null && _action$meta15.getError) {
    throw action.meta.getError(error);
  }

  throw error;
};

var maybeCallOnErrorInterceptor = function maybeCallOnErrorInterceptor(action, config, store, error) {
  if (error !== 'REQUEST_ABORTED' && config.onError && (!action.meta || action.meta.runOnError !== false && !action.meta.ssrDuplicate)) {
    return Promise.all([config.onError(error, action, store)]);
  }

  throw error;
};

var maybeCallOnErrorMeta = function maybeCallOnErrorMeta(action, store, error) {
  var _action$meta16;

  if (error !== 'REQUEST_ABORTED' && (_action$meta16 = action.meta) != null && _action$meta16.onError && !action.meta.ssrDuplicate) {
    return Promise.all([action.meta.onError(error, action, store)]);
  }

  throw error;
};

var maybeCallOnAbortInterceptor = function maybeCallOnAbortInterceptor(action, config, store, error) {
  if (error === 'REQUEST_ABORTED' && config.onAbort && (!action.meta || action.meta.runOnAbort !== false)) {
    config.onAbort(action, store);
  }

  throw error;
};

var maybeCallOnAbortMeta = function maybeCallOnAbortMeta(action, store, error) {
  var _action$meta17;

  if (error === 'REQUEST_ABORTED' && (_action$meta17 = action.meta) != null && _action$meta17.onAbort) {
    action.meta.onAbort(action, store);
  }

  throw error;
};

var getInitialBatchObject = function getInitialBatchObject(responseKeys) {
  return responseKeys.reduce(function (prev, key) {
    prev[key] = [];
    return prev;
  }, {});
};

var maybeTransformBatchRequestResponse = function maybeTransformBatchRequestResponse(action, response) {
  var actionPayload = (0,_actions__WEBPACK_IMPORTED_MODULE_1__.getActionPayload)(action);
  var isBatchedRequest = Array.isArray(actionPayload.request);
  var responseKeys = Object.keys(response[0]);
  return isBatchedRequest && !isActionRehydrated(action) ? response.reduce(function (prev, current) {
    responseKeys.forEach(function (key) {
      prev[key].push(current[key]);
    });
    return prev;
  }, getInitialBatchObject(responseKeys)) : response[0];
};

var maybeCallGetData = function maybeCallGetData(action, store, response) {
  var _action$meta18;

  if (!isActionRehydrated(action) && (_action$meta18 = action.meta) != null && _action$meta18.getData) {
    var _action$meta19;

    var query = (0,_selectors__WEBPACK_IMPORTED_MODULE_2__.default)(store.getState(), {
      type: action.type,
      requestKey: (_action$meta19 = action.meta) == null ? void 0 : _action$meta19.requestKey
    });
    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, response, {
      data: action.meta.getData(response.data, query.data)
    });
  }

  return response;
};

var maybeCallOnSuccessInterceptor = function maybeCallOnSuccessInterceptor(action, config, store, response) {
  if (config.onSuccess && (!action.meta || action.meta.runOnSuccess !== false && !action.meta.ssrDuplicate)) {
    var result = config.onSuccess(response, action, store);

    if (!isActionRehydrated(action)) {
      return result;
    }
  }

  return response;
};

var maybeCallOnSuccessMeta = function maybeCallOnSuccessMeta(action, store, response) {
  var _action$meta20;

  if ((_action$meta20 = action.meta) != null && _action$meta20.onSuccess && !action.meta.ssrDuplicate) {
    var result = action.meta.onSuccess(response, action, store);

    if (!isActionRehydrated(action)) {
      return result;
    }
  }

  return response;
};

var sleep = function sleep() {
  return new Promise(function (resolve) {
    return setTimeout(resolve, 10);
  });
};

var createSendRequestMiddleware = function createSendRequestMiddleware(config) {
  // TODO: clear not pending promises sometimes
  var pendingRequests = {}; // for aborts

  var allPendingRequests = {}; // for joining

  return function (store) {
    return function (next) {
      return function (action) {
        var payload = (0,_actions__WEBPACK_IMPORTED_MODULE_1__.getActionPayload)(action);
        var requestsStore = (0,_create_requests_store__WEBPACK_IMPORTED_MODULE_3__.default)(store);

        if (action.type === _constants__WEBPACK_IMPORTED_MODULE_4__.JOIN_REQUEST) {
          next(action);
          return allPendingRequests[action.requestType] || sleep();
        }

        if (action.type === _constants__WEBPACK_IMPORTED_MODULE_4__.ABORT_REQUESTS || action.type === _constants__WEBPACK_IMPORTED_MODULE_4__.RESET_REQUESTS && payload.abortPending) {
          abortPendingRequests(action, pendingRequests);
          return next(action);
        }

        if (config.isRequestAction(action)) {
          var lastActionKey = getLastActionKey(action);
          allPendingRequests[lastActionKey] = defer();
          action = maybeCallOnRequestInterceptor(action, config, requestsStore);
          action = maybeCallOnRequestMeta(action, requestsStore);
          action = maybeDispatchRequestAction(action, next);
          var responsePromises = getResponsePromises(action, config, pendingRequests, store);
          return Promise.all(responsePromises)["catch"](function (error) {
            return maybeCallGetError(action, error);
          })["catch"](function (error) {
            return maybeCallOnErrorInterceptor(action, config, requestsStore, error);
          })["catch"](function (error) {
            return maybeCallOnErrorMeta(action, requestsStore, error);
          })["catch"](function (error) {
            return maybeCallOnAbortInterceptor(action, config, requestsStore, error);
          })["catch"](function (error) {
            return maybeCallOnAbortMeta(action, requestsStore, error);
          })["catch"](function (error) {
            if (error === 'REQUEST_ABORTED') {
              var abortAction = (0,_actions__WEBPACK_IMPORTED_MODULE_1__.createAbortAction)(action);

              if (!action.meta || !action.meta.silent) {
                store.dispatch(abortAction);
              }

              allPendingRequests[lastActionKey].resolve({
                action: abortAction,
                isAborted: true
              });
              throw {
                action: abortAction,
                isAborted: true
              };
            }

            var errorAction = (0,_actions__WEBPACK_IMPORTED_MODULE_1__.createErrorAction)(action, error);

            if (!action.meta || !action.meta.silent) {
              store.dispatch(errorAction);
            }

            allPendingRequests[lastActionKey].resolve({
              action: errorAction,
              error: error
            });
            throw {
              action: errorAction,
              error: error
            };
          }).then(function (response) {
            response = maybeTransformBatchRequestResponse(action, response);
            return maybeCallGetData(action, store, response);
          }).then(function (response) {
            return maybeCallOnSuccessInterceptor(action, config, requestsStore, response);
          }).then(function (response) {
            return maybeCallOnSuccessMeta(action, requestsStore, response);
          }).then(function (response) {
            var successAction = (0,_actions__WEBPACK_IMPORTED_MODULE_1__.createSuccessAction)(action, response);

            if (!action.meta || !action.meta.silent) {
              store.dispatch(successAction);
            }

            allPendingRequests[lastActionKey].resolve(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
              action: successAction
            }, response));
            return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
              action: successAction
            }, response);
          })["catch"](function (error) {
            if (error && error.action) {
              return error;
            }

            throw error;
          });
        }

        return next(action);
      };
    };
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSendRequestMiddleware);

/***/ }),

/***/ "./src/middleware/create-server-ssr-middleware.js":
/*!********************************************************!*\
  !*** ./src/middleware/create-server-ssr-middleware.js ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default-config */ "./src/default-config.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (requestsPromise, config) {
  if (config === void 0) {
    config = _default_config__WEBPACK_IMPORTED_MODULE_0__.default;
  }

  var index = 0;
  var successActions = [];
  var errorActions = [];
  return function () {
    return function (next) {
      return function (action) {
        if (config.isRequestAction(action)) {
          var _action$meta;

          index += ((_action$meta = action.meta) == null ? void 0 : _action$meta.dependentRequestsNumber) !== undefined ? action.meta.dependentRequestsNumber + 1 : 1;
        } else if ((0,_actions__WEBPACK_IMPORTED_MODULE_1__.isResponseAction)(action)) {
          action = next(action);

          if (!(0,_actions__WEBPACK_IMPORTED_MODULE_1__.isSuccessAction)(action)) {
            errorActions.push(action);
            index -= action.meta.dependentRequestsNumber !== undefined ? action.meta.dependentRequestsNumber + 1 : 1;
            index -= action.meta.isDependentRequest ? 1 : 0;
          } else {
            successActions.push(action);
            index -= action.meta.isDependentRequest ? 2 : 1;
          }

          if (index === 0) {
            if (errorActions.length > 0) {
              requestsPromise.reject({
                successActions: successActions,
                errorActions: errorActions
              });
            } else {
              requestsPromise.resolve(successActions);
            }
          }

          return action;
        }

        return next(action);
      };
    };
  };
});

/***/ }),

/***/ "./src/middleware/create-subscriptions-middleware.js":
/*!***********************************************************!*\
  !*** ./src/middleware/create-subscriptions-middleware.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _create_requests_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-requests-store */ "./src/middleware/create-requests-store.js");






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
    meta.mutations = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.mapObject)(subscriptionAction.meta.mutations, function (k, v) {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
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

        if (action.type === _constants__WEBPACK_IMPORTED_MODULE_2__.OPEN_WEBSOCKET) {
          lastOpenWebsocketAction = action;
        }

        if (!ws && WS && url && !lazy || action.type === _constants__WEBPACK_IMPORTED_MODULE_2__.OPEN_WEBSOCKET) {
          var requestsStore = (0,_create_requests_store__WEBPACK_IMPORTED_MODULE_3__.default)(store);
          clearLastReconnectTimeout();
          clearLastHeartbeatTimeout();

          if (ws) {
            ws.close(1000);
          }

          ws = new CleanableWebsocket(url, protocols, WS);
          ws.addEventListener('open', function () {
            if (!activateOn) {
              store.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.websocketOpened)());
              active = true;
            }

            if (onOpen) {
              onOpen(requestsStore, ws, action.type === _constants__WEBPACK_IMPORTED_MODULE_2__.OPEN_WEBSOCKET ? action.props : null);
            }

            if (isHeartbeatMessage) {
              clearLastHeartbeatTimeout();
              lastHeartbeatTimeout = setTimeout(function () {
                store.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.closeWebsocket)(3000));
              }, heartbeatTimeout * 1000);
            }
          });
          ws.addEventListener('error', function (e) {
            if (onError) {
              onError(e, requestsStore, ws);
            }
          });
          ws.addEventListener('close', function (e) {
            store.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.websocketClosed)(e.code));
            active = false;
            clearLastReconnectTimeout();
            clearLastHeartbeatTimeout();

            if (onClose) {
              onClose(e, requestsStore, ws);
            }

            if (e.code !== 1000 && reconnectTimeout) {
              lastReconnectTimeout = setTimeout(function () {
                store.dispatch(lastOpenWebsocketAction ? action : (0,_actions__WEBPACK_IMPORTED_MODULE_4__.openWebsocket)());
              }, reconnectTimeout * 1000);
            }
          });
          ws.addEventListener('message', function (message) {
            if (!active && activateOn && activateOn(message)) {
              store.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.websocketOpened)());
              active = true;
            }

            if (isHeartbeatMessage && isHeartbeatMessage(message)) {
              clearLastHeartbeatTimeout();
              lastHeartbeatTimeout = setTimeout(function () {
                store.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_4__.closeWebsocket)(3000));
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

        if (action.type === _constants__WEBPACK_IMPORTED_MODULE_2__.GET_WEBSOCKET) {
          return ws;
        }

        if (ws && action.type === _constants__WEBPACK_IMPORTED_MODULE_2__.CLOSE_WEBSOCKET) {
          clearLastReconnectTimeout();
          clearLastHeartbeatTimeout();
          var response = next(action);
          ws.close(action.code);
          ws = null;
          return response;
        } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_2__.WEBSOCKET_OPENED) {
          Object.values(subscriptions).forEach(function (subscriptionAction) {
            var actionPayload = (0,_actions__WEBPACK_IMPORTED_MODULE_4__.getActionPayload)(subscriptionAction);

            if (actionPayload.subscription) {
              ws.send(JSON.stringify(onSend ? onSend(actionPayload.subscription, subscriptionAction) : actionPayload.subscription));
            }
          });
        } else if (action.type === _constants__WEBPACK_IMPORTED_MODULE_2__.STOP_SUBSCRIPTIONS) {
          var _requestsStore = (0,_create_requests_store__WEBPACK_IMPORTED_MODULE_3__.default)(store);

          if (!action.subscriptions) {
            if (onStopSubscriptions) {
              onStopSubscriptions(Object.keys(subscriptions), action, ws, _requestsStore);
            }

            subscriptions = {};
          } else {
            if (onStopSubscriptions) {
              onStopSubscriptions(action.subscriptions, action, ws, _requestsStore);
            }

            subscriptions = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.mapObject)(subscriptions, function (k, v) {
              return action.subscriptions.includes(k) ? undefined : v;
            });
          }
        } else if (action.subscription !== undefined || ((_action$payload = action.payload) == null ? void 0 : _action$payload.subscription) !== undefined) {
          var _action$meta2, _action$meta3;

          if ((_action$meta2 = action.meta) != null && _action$meta2.onMessage || (_action$meta3 = action.meta) != null && _action$meta3.mutations || shouldBeNormalized(action, normalize)) {
            var _action$meta4, _extends2;

            subscriptions = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, subscriptions, (_extends2 = {}, _extends2[action.type + (((_action$meta4 = action.meta) == null ? void 0 : _action$meta4.requestKey) || '')] = action, _extends2));
          }

          var actionPayload = (0,_actions__WEBPACK_IMPORTED_MODULE_4__.getActionPayload)(action);

          if (actionPayload.subscription && ws && active) {
            ws.send(JSON.stringify(onSend ? onSend(actionPayload.subscription, action) : actionPayload.subscription));
          }
        }

        return next(action);
      };
    };
  };
});

/***/ }),

/***/ "./src/normalizers/denormalize.js":
/*!****************************************!*\
  !*** ./src/normalizers/denormalize.js ***!
  \****************************************/
/*! namespace exports */
/*! export denormalize [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "denormalize": () => /* binding */ denormalize
/* harmony export */ });
var denormalize = function denormalize(data, normalizedData, usedKeys, path) {
  if (path === void 0) {
    path = '';
  }

  if (typeof data === 'string' && data.startsWith('@@')) {
    return denormalize(normalizedData[data], normalizedData, usedKeys, path);
  }

  if (Array.isArray(data)) {
    return data.map(function (v) {
      return denormalize(v, normalizedData, usedKeys, path);
    });
  }

  if (data !== null && typeof data === 'object') {
    var objectEntries = usedKeys[path] ? Object.entries(data).filter(function (_ref) {
      var k = _ref[0];
      return usedKeys[path].includes(k);
    }) : Object.entries(data);
    return objectEntries.reduce(function (prev, _ref2) {
      var k = _ref2[0],
          v = _ref2[1];
      prev[k] = denormalize(v, normalizedData, usedKeys, path + "." + k);
      return prev;
    }, {});
  }

  return data;
};

/***/ }),

/***/ "./src/normalizers/get-dependent-keys.js":
/*!***********************************************!*\
  !*** ./src/normalizers/get-dependent-keys.js ***!
  \***********************************************/
/*! namespace exports */
/*! export getDependentKeys [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDependentKeys": () => /* binding */ getDependentKeys
/* harmony export */ });
var getDependentKeys = function getDependentKeys(data, normalizedData, usedKeys, dependentKeys, path) {
  if (path === void 0) {
    path = '';
  }

  if (!dependentKeys) {
    dependentKeys = new Set();
  }

  if (typeof data === 'string' && data.startsWith('@@')) {
    dependentKeys.add(data);
    getDependentKeys(normalizedData[data], normalizedData, usedKeys, dependentKeys, path);
  } else if (Array.isArray(data)) {
    data.forEach(function (v) {
      return getDependentKeys(v, normalizedData, usedKeys, dependentKeys, path);
    });
  } else if (data !== null && typeof data === 'object') {
    var objectEntries = usedKeys[path] ? Object.entries(data).filter(function (_ref) {
      var k = _ref[0];
      return usedKeys[path].includes(k);
    }) : Object.entries(data);
    objectEntries.forEach(function (_ref2) {
      var k = _ref2[0],
          v = _ref2[1];
      getDependentKeys(v, normalizedData, usedKeys, dependentKeys, path + "." + k);
    });
  }

  return dependentKeys;
};

/***/ }),

/***/ "./src/normalizers/merge-data.js":
/*!***************************************!*\
  !*** ./src/normalizers/merge-data.js ***!
  \***************************************/
/*! namespace exports */
/*! export mergeData [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeData": () => /* binding */ mergeData
/* harmony export */ });
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deepmerge */ "../../node_modules/deepmerge/dist/cjs.js");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__);

var mergeOptions = {
  arrayMerge: function arrayMerge(destinationArray, sourceArray) {
    return sourceArray;
  },
  clone: false
};
var mergeData = function mergeData(oldData, newData) {
  return deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(oldData, newData, mergeOptions);
};

/***/ }),

/***/ "./src/normalizers/normalize.js":
/*!**************************************!*\
  !*** ./src/normalizers/normalize.js ***!
  \**************************************/
/*! namespace exports */
/*! export getDependencies [provided] [no usage info] [missing usage info prevents renaming] */
/*! export normalize [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDependencies": () => /* binding */ getDependencies,
/* harmony export */   "normalize": () => /* binding */ normalize
/* harmony export */ });
/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default-config */ "./src/default-config.js");
/* harmony import */ var _merge_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge-data */ "./src/normalizers/merge-data.js");



var stipFromDeps = function stipFromDeps(data, config, root) {
  if (root === void 0) {
    root = true;
  }

  if (Array.isArray(data)) {
    return data.map(function (v) {
      return stipFromDeps(v, config);
    });
  }

  if (data !== null && typeof data === 'object') {
    if (config.shouldObjectBeNormalized(data) && root) {
      return "@@" + config.getNormalisationObjectKey(data);
    }

    return Object.entries(data).reduce(function (prev, _ref) {
      var k = _ref[0],
          v = _ref[1];
      prev[k] = stipFromDeps(v, config);
      return prev;
    }, {});
  }

  return data;
};

var getDependencies = function getDependencies(data, config, usedKeys, path) {
  if (config === void 0) {
    config = _default_config__WEBPACK_IMPORTED_MODULE_0__.default;
  }

  if (path === void 0) {
    path = '';
  }

  usedKeys = usedKeys || {};

  if (Array.isArray(data)) {
    return [data.reduce(function (prev, current) {
      return [].concat(prev, getDependencies(current, config, usedKeys, path)[0]);
    }, []), usedKeys];
  }

  if (data !== null && typeof data === 'object') {
    if (config.shouldObjectBeNormalized(data)) {
      usedKeys[path] = Object.keys(data);
    }

    return [Object.entries(data).reduce(function (prev, _ref2) {
      var k = _ref2[0],
          v = _ref2[1];
      return [].concat(prev, getDependencies(v, config, usedKeys, path + "." + k)[0]);
    }, config.shouldObjectBeNormalized(data) ? [data] : []), usedKeys];
  }

  return [[], usedKeys];
};
var normalize = function normalize(data, config) {
  if (config === void 0) {
    config = _default_config__WEBPACK_IMPORTED_MODULE_0__.default;
  }

  var _getDependencies = getDependencies(data, config),
      dependencies = _getDependencies[0],
      usedKeys = _getDependencies[1];

  return [stipFromDeps(data, config, true), dependencies.reduce(function (prev, v) {
    var key = config.getNormalisationObjectKey(v);
    prev["@@" + key] = prev["@@" + key] ? (0,_merge_data__WEBPACK_IMPORTED_MODULE_1__.mergeData)(prev["@@" + key], stipFromDeps(v, config, false)) : stipFromDeps(v, config, false);
    return prev;
  }, {}), usedKeys];
};

/***/ }),

/***/ "./src/reducers/cache-reducer.js":
/*!***************************************!*\
  !*** ./src/reducers/cache-reducer.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/actions.js");




var getNewCacheTimeout = function getNewCacheTimeout(cache) {
  return cache === true ? null : cache * 1000 + Date.now();
};

var getRequestKey = function getRequestKey(action) {
  return action.type + (action.meta.requestKey || '');
};

var getRequestTypeString = function getRequestTypeString(requestType) {
  return typeof requestType === 'function' ? requestType.toString() : requestType;
};

var getRequestKeys = function getRequestKeys(requests) {
  return requests.map(function (v) {
    return typeof v === 'object' ? getRequestTypeString(v.requestType) + v.requestKey : getRequestTypeString(v);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, action) {
  if (action.type === _constants__WEBPACK_IMPORTED_MODULE_1__.CLEAR_REQUESTS_CACHE) {
    if (!action.requests) {
      return {};
    }

    state = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state);
    getRequestKeys(action.requests).forEach(function (requestKey) {
      delete state[requestKey];
    });
    return state;
  }

  if ((0,_actions__WEBPACK_IMPORTED_MODULE_2__.isSuccessAction)(action) && action.meta.cache && !action.meta.cacheResponse && !action.meta.ssrResponse) {
    var _extends2;

    var requestAction = (0,_actions__WEBPACK_IMPORTED_MODULE_2__.getRequestActionFromResponse)(action);
    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, (_extends2 = {}, _extends2[getRequestKey(requestAction)] = {
      timeout: getNewCacheTimeout(action.meta.cache),
      cacheKey: action.meta.cacheKey
    }, _extends2));
  }

  return state;
});

/***/ }),

/***/ "./src/reducers/mutations-reducer.js":
/*!*******************************************!*\
  !*** ./src/reducers/mutations-reducer.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, action) {
  var _action$meta2, _extends4;

  if (!(0,_actions__WEBPACK_IMPORTED_MODULE_1__.isResponseAction)(action)) {
    var _action$meta, _extends2;

    var _mutationType = action.type + ((_action$meta = action.meta) != null && _action$meta.requestKey ? action.meta.requestKey : '');

    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, (_extends2 = {}, _extends2[_mutationType] = {
      error: null,
      pending: (state[_mutationType] ? state[_mutationType].pending : 0) + 1,
      ref: state[_mutationType] ? state[_mutationType].ref : {}
    }, _extends2));
  }

  var requestAction = (0,_actions__WEBPACK_IMPORTED_MODULE_1__.getRequestActionFromResponse)(action);
  var mutationType = requestAction.type + ((_action$meta2 = action.meta) != null && _action$meta2.requestKey ? action.meta.requestKey : '');

  if ((0,_actions__WEBPACK_IMPORTED_MODULE_1__.isErrorAction)(action)) {
    var _extends3;

    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, (_extends3 = {}, _extends3[mutationType] = {
      error: action.payload ? action.payload : action.error,
      pending: state[mutationType].pending - 1,
      ref: state[mutationType].ref
    }, _extends3));
  }

  if ((0,_actions__WEBPACK_IMPORTED_MODULE_1__.isAbortAction)(action) && state[mutationType].pending === 1 && state[mutationType].error === null) {
    return state;
  }

  return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, (_extends4 = {}, _extends4[mutationType] = {
    error: null,
    pending: state[mutationType].pending - 1,
    ref: state[mutationType].ref
  }, _extends4));
});

/***/ }),

/***/ "./src/reducers/progress-reducer.js":
/*!******************************************!*\
  !*** ./src/reducers/progress-reducer.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, action, config) {
  var _action$meta, _action$meta3;

  if (action.type === _constants__WEBPACK_IMPORTED_MODULE_1__.SET_DOWNLOAD_PROGRESS) {
    var _extends2;

    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      downloadProgress: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state.downloadProgress, (_extends2 = {}, _extends2[action.requestType] = action.progress, _extends2))
    });
  }

  if (action.type === _constants__WEBPACK_IMPORTED_MODULE_1__.SET_UPLOAD_PROGRESS) {
    var _extends3;

    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      uploadProgress: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state.uploadProgress, (_extends3 = {}, _extends3[action.requestType] = action.progress, _extends3))
    });
  }

  if (config.isRequestAction(action) && (_action$meta = action.meta) != null && _action$meta.measureDownloadProgress) {
    var _action$meta2, _extends4;

    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      downloadProgress: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state.downloadProgress, (_extends4 = {}, _extends4[action.type + (((_action$meta2 = action.meta) == null ? void 0 : _action$meta2.requestKey) || '')] = 0, _extends4))
    });
  }

  if (config.isRequestAction(action) && (_action$meta3 = action.meta) != null && _action$meta3.measureUploadProgress) {
    var _action$meta4, _extends5;

    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      uploadProgress: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state.uploadProgress, (_extends5 = {}, _extends5[action.type + (((_action$meta4 = action.meta) == null ? void 0 : _action$meta4.requestKey) || '')] = 0, _extends5))
    });
  }

  return state;
});

/***/ }),

/***/ "./src/reducers/queries-reducer.js":
/*!*****************************************!*\
  !*** ./src/reducers/queries-reducer.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../default-config */ "./src/default-config.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selectors */ "./src/selectors/get-query.js");
/* harmony import */ var _normalizers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../normalizers */ "./src/normalizers/normalize.js");
/* harmony import */ var _normalizers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../normalizers */ "./src/normalizers/merge-data.js");
/* harmony import */ var _update_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-data */ "./src/reducers/update-data.js");



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







var getInitialQuery = function getInitialQuery(normalized) {
  return {
    data: null,
    pending: 0,
    error: null,
    pristine: true,
    ref: {},
    normalized: normalized,
    usedKeys: normalized ? {} : null
  };
};

var getDataFromResponseAction = function getDataFromResponseAction(action) {
  return action.payload ? action.payload.data : action.response.data;
};

var shouldBeNormalized = function shouldBeNormalized(action, config) {
  var _action$meta;

  return ((_action$meta = action.meta) == null ? void 0 : _action$meta.normalize) !== undefined ? action.meta.normalize : config.normalize;
};

var queryReducer = function queryReducer(state, action, actionType, config, normalizedData) {
  var _action$meta2, _action$meta2$mutatio, _action$meta3, _action$meta4, _action$meta5, _action$meta6, _action$meta7, _action$meta8;

  if (state === undefined) {
    state = getInitialQuery(shouldBeNormalized(action, config));
  }

  if ((_action$meta2 = action.meta) != null && (_action$meta2$mutatio = _action$meta2.mutations) != null && _action$meta2$mutatio[actionType]) {
    var _queries;

    var mutationConfig = action.meta.mutations[actionType];
    var data = (0,_update_data__WEBPACK_IMPORTED_MODULE_2__.default)(state.normalized ? (0,_selectors__WEBPACK_IMPORTED_MODULE_3__.default)({
      requests: {
        normalizedData: normalizedData,
        queries: (_queries = {}, _queries[actionType] = state, _queries),
        downloadProgress: {},
        uploadProgress: {}
      }
    }, {
      type: actionType
    }).data : state.data, action, mutationConfig);
    return data === state.data ? state : _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
      data: data
    });
  }

  switch (action.type) {
    case (0,_actions__WEBPACK_IMPORTED_MODULE_4__.success)(actionType):
      return (_action$meta3 = action.meta) != null && _action$meta3.ssrResponse || (_action$meta4 = action.meta) != null && _action$meta4.cacheResponse ? state : _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        data: getDataFromResponseAction(action),
        pending: state.pending - 1,
        error: null
      });

    case (0,_actions__WEBPACK_IMPORTED_MODULE_4__.error)(actionType):
      return (_action$meta5 = action.meta) != null && _action$meta5.ssrError ? state : _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        data: null,
        pending: state.pending - 1,
        error: action.payload ? action.payload : action.error
      });

    case (0,_actions__WEBPACK_IMPORTED_MODULE_4__.abort)(actionType):
      {
        if (state.pending === 1 && state.data === null && state.error === null) {
          return undefined;
        }

        return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
          pending: state.pending - 1
        });
      }

    default:
      return (_action$meta6 = action.meta) != null && _action$meta6.ssrResponse || (_action$meta7 = action.meta) != null && _action$meta7.ssrError || (_action$meta8 = action.meta) != null && _action$meta8.cacheResponse ? state : _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        pending: state.pending + 1,
        error: null,
        pristine: false
      });
  }
};

var maybeGetQueryActionType = function maybeGetQueryActionType(action, config) {
  if (config.isRequestAction(action) && config.isRequestActionQuery(action)) {
    return action.type;
  }

  if ((0,_actions__WEBPACK_IMPORTED_MODULE_4__.isResponseAction)(action) && config.isRequestActionQuery((0,_actions__WEBPACK_IMPORTED_MODULE_4__.getRequestActionFromResponse)(action))) {
    return (0,_actions__WEBPACK_IMPORTED_MODULE_4__.getRequestActionFromResponse)(action).type;
  }

  return null;
};

var updateNormalizedData = function updateNormalizedData(normalizedData, action, config) {
  var _action$meta9, _action$meta10;

  if (config.isRequestAction(action) && (_action$meta9 = action.meta) != null && _action$meta9.optimisticData) {
    var _normalize = (0,_normalizers__WEBPACK_IMPORTED_MODULE_5__.normalize)(action.meta.optimisticData, config),
        newNormalizedData = _normalize[1];

    return (0,_normalizers__WEBPACK_IMPORTED_MODULE_6__.mergeData)(normalizedData, newNormalizedData);
  }

  if ((0,_actions__WEBPACK_IMPORTED_MODULE_4__.isResponseAction)(action) && (0,_actions__WEBPACK_IMPORTED_MODULE_4__.isErrorAction)(action) && action.meta.revertedData) {
    var _normalize2 = (0,_normalizers__WEBPACK_IMPORTED_MODULE_5__.normalize)(action.meta.revertedData, config),
        _newNormalizedData = _normalize2[1];

    return (0,_normalizers__WEBPACK_IMPORTED_MODULE_6__.mergeData)(normalizedData, _newNormalizedData);
  }

  if ((0,_actions__WEBPACK_IMPORTED_MODULE_4__.isResponseAction)(action) && (0,_actions__WEBPACK_IMPORTED_MODULE_4__.isSuccessAction)(action) && shouldBeNormalized(action, config) && !config.isRequestActionQuery((0,_actions__WEBPACK_IMPORTED_MODULE_4__.getRequestActionFromResponse)(action))) {
    var _normalize3 = (0,_normalizers__WEBPACK_IMPORTED_MODULE_5__.normalize)(getDataFromResponseAction(action), config),
        _newNormalizedData2 = _normalize3[1];

    return (0,_normalizers__WEBPACK_IMPORTED_MODULE_6__.mergeData)(normalizedData, _newNormalizedData2);
  }

  if ((_action$meta10 = action.meta) != null && _action$meta10.localData) {
    var _normalize4 = (0,_normalizers__WEBPACK_IMPORTED_MODULE_5__.normalize)(action.meta.localData, config),
        _newNormalizedData3 = _normalize4[1];

    return (0,_normalizers__WEBPACK_IMPORTED_MODULE_6__.mergeData)(normalizedData, _newNormalizedData3);
  }

  return normalizedData;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, action, config) {
  var _action$meta11;

  if (config === void 0) {
    config = _default_config__WEBPACK_IMPORTED_MODULE_7__.default;
  }

  var normalizedData = updateNormalizedData(state.normalizedData, action, config);

  if ((_action$meta11 = action.meta) != null && _action$meta11.mutations) {
    return {
      queries: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, state.queries, Object.keys(action.meta.mutations).filter(function (actionType) {
        return !!state.queries[actionType];
      }).reduce(function (prev, actionType) {
        var updatedQuery = queryReducer(state.queries[actionType], action, actionType, config, normalizedData);

        if (updatedQuery.normalized && updatedQuery.data !== state.queries[actionType].data) {
          var _normalize5 = (0,_normalizers__WEBPACK_IMPORTED_MODULE_5__.normalize)(updatedQuery.data, config),
              newdata = _normalize5[0],
              newNormalizedData = _normalize5[1],
              usedKeys = _normalize5[2];

          normalizedData = (0,_normalizers__WEBPACK_IMPORTED_MODULE_6__.mergeData)(normalizedData, newNormalizedData);
          prev[actionType] = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, updatedQuery, {
            data: newdata,
            usedKeys: usedKeys
          });
        } else {
          prev[actionType] = updatedQuery;
        }

        return prev;
      }, {})),
      normalizedData: normalizedData
    };
  }

  var queryActionType = maybeGetQueryActionType(action, config);

  if (queryActionType) {
    var _action$meta12, _extends3;

    var queryType = ((_action$meta12 = action.meta) == null ? void 0 : _action$meta12.requestKey) !== undefined ? queryActionType + action.meta.requestKey : queryActionType;
    var updatedQuery = queryReducer(state.queries[queryType], action, queryActionType, config);

    if (updatedQuery === undefined) {
      // eslint-disable-next-line no-unused-vars
      var _state$queries = state.queries,
          toRemove = _state$queries[queryType],
          remainingQueries = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_state$queries, [queryType].map(_toPropertyKey));

      return {
        queries: remainingQueries,
        normalizedData: normalizedData
      };
    }

    if (updatedQuery.normalized && updatedQuery.data && (!state.queries[queryType] || state.queries[queryType].data !== updatedQuery.data)) {
      var _extends2;

      var _normalize6 = (0,_normalizers__WEBPACK_IMPORTED_MODULE_5__.normalize)(updatedQuery.data, config),
          data = _normalize6[0],
          newNormalizedData = _normalize6[1],
          usedKeys = _normalize6[2];

      return {
        queries: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, state.queries, (_extends2 = {}, _extends2[queryType] = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, updatedQuery, {
          data: data,
          usedKeys: usedKeys
        }), _extends2)),
        normalizedData: (0,_normalizers__WEBPACK_IMPORTED_MODULE_6__.mergeData)(normalizedData, newNormalizedData)
      };
    }

    return {
      queries: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, state.queries, (_extends3 = {}, _extends3[queryType] = updatedQuery, _extends3)),
      normalizedData: normalizedData
    };
  }

  return state.normalizedData === normalizedData ? state : _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    normalizedData: normalizedData
  });
});

/***/ }),

/***/ "./src/reducers/requests-keys-reducer.js":
/*!***********************************************!*\
  !*** ./src/reducers/requests-keys-reducer.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../default-config */ "./src/default-config.js");

 // TODO: this should be rewritten to more functional style, we need things like filter object helpers

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, action, config) {
  var _action$meta;

  if (config === void 0) {
    config = _default_config__WEBPACK_IMPORTED_MODULE_1__.default;
  }

  if (config.isRequestAction(action) && ((_action$meta = action.meta) == null ? void 0 : _action$meta.requestKey) !== undefined) {
    var queries = state.queries,
        mutations = state.mutations,
        cache = state.cache,
        requestsKeys = state.requestsKeys;

    if (!requestsKeys[action.type]) {
      var _extends2;

      requestsKeys = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, requestsKeys, (_extends2 = {}, _extends2[action.type] = [action.meta.requestKey], _extends2));
    } else {
      var _extends3;

      requestsKeys = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, requestsKeys, (_extends3 = {}, _extends3[action.type] = [].concat(requestsKeys[action.type].filter(function (k) {
        return k !== action.meta.requestKey;
      }), [action.meta.requestKey]), _extends3));
    }

    if (action.meta.requestsCapacity && requestsKeys[action.type].length > action.meta.requestsCapacity) {
      var isQuery = config.isRequestActionQuery(action);
      var requestsStorage = isQuery ? queries : mutations;
      var numberOfExceedingRequests = requestsKeys[action.type].length - action.meta.requestsCapacity;

      if (numberOfExceedingRequests > 0) {
        var exceedingRequestsKeys = requestsKeys[action.type].slice(0, numberOfExceedingRequests).filter(function (k) {
          var exceededRequest = requestsStorage[action.type + k];
          return !exceededRequest || exceededRequest.pending === 0; // we dont want to remove pending requests
        });

        if (exceedingRequestsKeys.length > 0) {
          var _extends4;

          requestsKeys = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, requestsKeys, (_extends4 = {}, _extends4[action.type] = requestsKeys[action.type].filter(function (k) {
            return !exceedingRequestsKeys.includes(k);
          }), _extends4));

          var copiedStorage = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, requestsStorage);

          exceedingRequestsKeys.forEach(function (k) {
            delete copiedStorage[action.type + k];
          });

          if (isQuery) {
            queries = copiedStorage;

            var copiedCache = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, cache);

            exceedingRequestsKeys.forEach(function (k) {
              delete copiedCache[action.type + k];
            });
            cache = copiedCache;
          } else {
            mutations = copiedStorage;
          }
        }
      }
    }

    return {
      queries: queries,
      mutations: mutations,
      cache: cache,
      requestsKeys: requestsKeys,
      downloadProgress: state.downloadProgress,
      uploadProgress: state.uploadProgress
    };
  }

  return state;
});

/***/ }),

/***/ "./src/reducers/requests-reducer.js":
/*!******************************************!*\
  !*** ./src/reducers/requests-reducer.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../default-config */ "./src/default-config.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var _queries_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries-reducer */ "./src/reducers/queries-reducer.js");
/* harmony import */ var _mutations_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mutations-reducer */ "./src/reducers/mutations-reducer.js");
/* harmony import */ var _requests_keys_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requests-keys-reducer */ "./src/reducers/requests-keys-reducer.js");
/* harmony import */ var _cache_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cache-reducer */ "./src/reducers/cache-reducer.js");
/* harmony import */ var _progress_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./progress-reducer */ "./src/reducers/progress-reducer.js");
/* harmony import */ var _requests_reset_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requests-reset-reducer */ "./src/reducers/requests-reset-reducer.js");
/* harmony import */ var _ssr_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ssr-reducer */ "./src/reducers/ssr-reducer.js");
/* harmony import */ var _watchers_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./watchers-reducer */ "./src/reducers/watchers-reducer.js");
/* harmony import */ var _websocket_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./websocket-reducer */ "./src/reducers/websocket-reducer.js");












var defaultState = {
  queries: {},
  mutations: {},
  normalizedData: {},
  cache: {},
  downloadProgress: {},
  uploadProgress: {},
  requestsKeys: {},
  watchers: {},
  websocket: {
    pristine: true,
    connected: false
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (config) {
  if (config === void 0) {
    config = _default_config__WEBPACK_IMPORTED_MODULE_1__.default;
  }

  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    var _queriesReducer = (0,_queries_reducer__WEBPACK_IMPORTED_MODULE_2__.default)({
      queries: state.queries,
      normalizedData: state.normalizedData
    }, action, config),
        queries = _queriesReducer.queries,
        normalizedData = _queriesReducer.normalizedData;

    var _state = state,
        mutations = _state.mutations;

    if (config.isRequestAction(action) && !config.isRequestActionQuery(action) || (0,_actions__WEBPACK_IMPORTED_MODULE_3__.isResponseAction)(action) && !config.isRequestActionQuery((0,_actions__WEBPACK_IMPORTED_MODULE_3__.getRequestActionFromResponse)(action))) {
      mutations = (0,_mutations_reducer__WEBPACK_IMPORTED_MODULE_4__.default)(mutations, action);
    }

    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, (0,_requests_keys_reducer__WEBPACK_IMPORTED_MODULE_5__.default)(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, (0,_requests_reset_reducer__WEBPACK_IMPORTED_MODULE_6__.default)(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      queries: queries,
      mutations: mutations,
      cache: (0,_cache_reducer__WEBPACK_IMPORTED_MODULE_7__.default)(state.cache, action)
    }, (0,_progress_reducer__WEBPACK_IMPORTED_MODULE_8__.default)({
      downloadProgress: state.downloadProgress,
      uploadProgress: state.uploadProgress
    }, action, config)), action), {
      requestsKeys: state.requestsKeys
    }), action, config), {
      normalizedData: normalizedData,
      ssr: config.ssr ? (0,_ssr_reducer__WEBPACK_IMPORTED_MODULE_9__.default)(state.ssr, action, config) : null,
      watchers: (0,_watchers_reducer__WEBPACK_IMPORTED_MODULE_10__.default)(state.watchers, action, config),
      websocket: (0,_websocket_reducer__WEBPACK_IMPORTED_MODULE_11__.default)(state.websocket, action, config)
    });
  };
});

/***/ }),

/***/ "./src/reducers/requests-reset-reducer.js":
/*!************************************************!*\
  !*** ./src/reducers/requests-reset-reducer.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");




var getRequestTypeString = function getRequestTypeString(requestType) {
  return typeof requestType === 'function' ? requestType.toString() : requestType;
};

var getKeys = function getKeys(requests) {
  return requests.map(function (v) {
    return typeof v === 'object' ? getRequestTypeString(v.requestType) + (v.requestKey || '') : getRequestTypeString(v);
  });
};

var resetQuery = function resetQuery(query) {
  return query.pending === 0 ? undefined : _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, query, {
    data: null,
    error: null,
    pristine: true,
    usedKeys: query.normalized ? {} : null
  });
};

var resetMutation = function resetMutation(mutation) {
  return mutation.pending === 0 ? undefined : _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, mutation, {
    error: null
  });
}; // TODO: probably move a cache module


var isCacheValid = function isCacheValid(cache, action) {
  var _action$meta;

  return cache.cacheKey === ((_action$meta = action.meta) == null ? void 0 : _action$meta.cacheKey) && (cache.timeout === null || Date.now() <= cache.timeout);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, action) {
  if (action.type !== _constants__WEBPACK_IMPORTED_MODULE_1__.RESET_REQUESTS) {
    return state;
  }

  var queries = state.queries,
      mutations = state.mutations,
      cache = state.cache,
      downloadProgress = state.downloadProgress,
      uploadProgress = state.uploadProgress;
  var clearAll = !action.requests;
  var keys = !clearAll && getKeys(action.requests);
  queries = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.mapObject)(queries, function (k, v) {
    var cacheValue = cache[k];

    if ((clearAll || keys.includes(k)) && (action.resetCached || cacheValue === undefined || cacheValue && !isCacheValid(cacheValue, action))) {
      return resetQuery(v);
    }

    return v;
  });
  mutations = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.mapObject)(mutations, function (k, v) {
    return clearAll || keys.includes(k) ? resetMutation(v) : v;
  });
  cache = clearAll && action.resetCached ? {} : (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.mapObject)(cache, function (k, v) {
    var cacheValue = cache[k];

    if ((clearAll || keys.includes(k)) && (action.resetCached || cacheValue === undefined || cacheValue && !isCacheValid(cacheValue, action))) {
      return undefined;
    }

    return v;
  });
  downloadProgress = clearAll ? {} : (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.mapObject)(downloadProgress, function (k, v) {
    return clearAll || keys.includes(k) ? resetMutation(v) : v;
  });
  uploadProgress = clearAll ? {} : (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.mapObject)(uploadProgress, function (k, v) {
    return clearAll || keys.includes(k) ? resetMutation(v) : v;
  });
  return {
    queries: queries,
    mutations: mutations,
    cache: cache,
    downloadProgress: downloadProgress,
    uploadProgress: uploadProgress
  };
});

/***/ }),

/***/ "./src/reducers/ssr-reducer.js":
/*!*************************************!*\
  !*** ./src/reducers/ssr-reducer.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _default_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../default-config */ "./src/default-config.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, action, config) {
  var _action$meta, _action$meta2;

  if (state === void 0) {
    state = [];
  }

  if (config === void 0) {
    config = _default_config__WEBPACK_IMPORTED_MODULE_0__.default;
  }

  if (config.ssr === 'server' && (0,_actions__WEBPACK_IMPORTED_MODULE_1__.isResponseAction)(action)) {
    return [].concat(state, [(0,_actions__WEBPACK_IMPORTED_MODULE_1__.getRequestActionFromResponse)(action).type + (action.meta.requestKey || '')]);
  }

  if (config.ssr === 'server' && action.type === _constants__WEBPACK_IMPORTED_MODULE_2__.JOIN_REQUEST && action.rehydrate) {
    return [].concat(state, [{
      requestType: action.requestType,
      duplicate: true
    }]);
  }

  if (config.ssr === 'client' && config.isRequestAction(action) && ((_action$meta = action.meta) != null && _action$meta.ssrResponse || (_action$meta2 = action.meta) != null && _action$meta2.ssrError)) {
    var indexToRemove = state.findIndex(function (v) {
      return (v.requestType || v) === action.type + (action.meta.requestKey || '');
    });

    if (indexToRemove >= 0) {
      return state.filter(function (_, i) {
        return i !== indexToRemove;
      });
    }
  }

  return state;
});

/***/ }),

/***/ "./src/reducers/update-data.js":
/*!*************************************!*\
  !*** ./src/reducers/update-data.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/actions.js");


var getDataUpdater = function getDataUpdater(mutationConfig) {
  if (typeof mutationConfig === 'function') {
    return mutationConfig;
  } else if (mutationConfig.updateData) {
    return mutationConfig.updateData;
  }

  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (data, action, mutationConfig) {
  if ((0,_actions__WEBPACK_IMPORTED_MODULE_0__.isResponseAction)(action)) {
    if ((0,_actions__WEBPACK_IMPORTED_MODULE_0__.isSuccessAction)(action)) {
      var dataUpdater = getDataUpdater(mutationConfig);
      return dataUpdater ? dataUpdater(data, action.payload ? action.payload.data : action.response.data) : data;
    } // error or abort case


    return mutationConfig.revertData ? mutationConfig.revertData(data) : data;
  }

  if (mutationConfig.updateDataOptimistic) {
    return mutationConfig.updateDataOptimistic(data);
  }

  if (mutationConfig.local) {
    return getDataUpdater(mutationConfig)(data);
  }

  return data;
});

/***/ }),

/***/ "./src/reducers/watchers-reducer.js":
/*!******************************************!*\
  !*** ./src/reducers/watchers-reducer.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, action, config) {
  if (config.ssr === 'server') {
    return state;
  }

  if (action.type === _constants__WEBPACK_IMPORTED_MODULE_2__.ADD_WATCHER) {
    var _extends2;

    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, state, (_extends2 = {}, _extends2[action.requestType] = state[action.requestType] === undefined ? 1 : state[action.requestType] + 1, _extends2));
  }

  if (action.type === _constants__WEBPACK_IMPORTED_MODULE_2__.REMOVE_WATCHER && state[action.requestType] === 1) {
    // eslint-disable-next-line no-unused-vars
    var _action$requestType = action.requestType,
        toRemove = state[_action$requestType],
        remaining = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(state, [_action$requestType].map(_toPropertyKey));

    return remaining;
  }

  if (action.type === _constants__WEBPACK_IMPORTED_MODULE_2__.REMOVE_WATCHER && state[action.requestType] !== 1) {
    var _extends3;

    return _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, state, (_extends3 = {}, _extends3[action.requestType] = state[action.requestType] - 1, _extends3));
  }

  return state;
});

/***/ }),

/***/ "./src/reducers/websocket-reducer.js":
/*!*******************************************!*\
  !*** ./src/reducers/websocket-reducer.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, action, config) {
  if (config.ssr === 'server') {
    return state;
  }

  if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.WEBSOCKET_OPENED) {
    return {
      pristine: false,
      connected: true
    };
  }

  if (action.type === _constants__WEBPACK_IMPORTED_MODULE_0__.WEBSOCKET_CLOSED) {
    return {
      pristine: action.code === 1000,
      connected: false
    };
  }

  return state;
});

/***/ }),

/***/ "./src/selectors/get-mutation-selector.js":
/*!************************************************!*\
  !*** ./src/selectors/get-mutation-selector.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _get_mutation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-mutation */ "./src/selectors/get-mutation.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {
  return function (state) {
    return (0,_get_mutation__WEBPACK_IMPORTED_MODULE_0__.default)(state, props);
  };
});

/***/ }),

/***/ "./src/selectors/get-mutation.js":
/*!***************************************!*\
  !*** ./src/selectors/get-mutation.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);

var defaultMutation = {
  loading: false,
  pending: 0,
  error: null,
  downloadProgress: null,
  uploadProgress: null
};

var getMutationState = function getMutationState(state, type, requestKey) {
  if (requestKey === void 0) {
    requestKey = '';
  }

  return state.requests.mutations[type + requestKey];
};

var mutationSelectors = new WeakMap();

var createMutationSelector = function createMutationSelector(type, requestKey) {
  return (0,reselect__WEBPACK_IMPORTED_MODULE_0__.createSelector)(function (state) {
    return getMutationState(state, type, requestKey);
  }, function (state) {
    var _state$requests$downl;

    return (_state$requests$downl = state.requests.downloadProgress[type + (requestKey || '')]) != null ? _state$requests$downl : null;
  }, function (state) {
    var _state$requests$uploa;

    return (_state$requests$uploa = state.requests.uploadProgress[type + (requestKey || '')]) != null ? _state$requests$uploa : null;
  }, function (mutationState, downloadProgress, uploadProgress) {
    return {
      pending: mutationState.pending,
      loading: mutationState.pending > 0,
      error: mutationState.error,
      downloadProgress: downloadProgress,
      uploadProgress: uploadProgress
    };
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, _ref) {
  var type = _ref.type,
      requestKey = _ref.requestKey;
  var mutationState = getMutationState(state, type, requestKey);

  if (!mutationState) {
    return defaultMutation;
  }

  if (!mutationSelectors.get(mutationState.ref)) {
    mutationSelectors.set(mutationState.ref, createMutationSelector(type, requestKey));
  }

  return mutationSelectors.get(mutationState.ref)(state);
});

/***/ }),

/***/ "./src/selectors/get-query-selector.js":
/*!*********************************************!*\
  !*** ./src/selectors/get-query-selector.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _get_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-query */ "./src/selectors/get-query.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {
  return function (state) {
    return (0,_get_query__WEBPACK_IMPORTED_MODULE_0__.default)(state, props);
  };
});

/***/ }),

/***/ "./src/selectors/get-query.js":
/*!************************************!*\
  !*** ./src/selectors/get-query.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _normalizers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../normalizers */ "./src/normalizers/get-dependent-keys.js");
/* harmony import */ var _normalizers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../normalizers */ "./src/normalizers/denormalize.js");


function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var isQueryEqual = function isQueryEqual(currentVal, previousVal) {
  if (currentVal.data !== previousVal.data || currentVal.pending !== previousVal.pending || currentVal.error !== previousVal.error || currentVal.pristine !== previousVal.pristine || currentVal.downloadProgress !== previousVal.downloadProgress || currentVal.uploadProgress !== previousVal.uploadProgress) {
    return false;
  }

  if (currentVal.data === null && (currentVal.multiple !== previousVal.multiple || currentVal.defaultData !== previousVal.defaultData)) {
    return false;
  }

  if (currentVal.normalized && currentVal.normalizedData !== previousVal.normalizedData) {
    var currentDependencies = (0,_normalizers__WEBPACK_IMPORTED_MODULE_2__.getDependentKeys)(currentVal.data, currentVal.normalizedData, currentVal.usedKeys);
    var previousDependencies = (0,_normalizers__WEBPACK_IMPORTED_MODULE_2__.getDependentKeys)(previousVal.data, previousVal.normalizedData, previousVal.usedKeys);

    if (currentDependencies.size !== previousDependencies.size) {
      return false;
    }

    for (var _iterator = _createForOfIteratorHelperLoose(currentDependencies), _step; !(_step = _iterator()).done;) {
      var k = _step.value;

      if (!previousDependencies.has(k) || currentVal.normalizedData[k] !== previousVal.normalizedData[k]) {
        return false;
      }
    }
  }

  return true;
};

var createCustomSelector = (0,reselect__WEBPACK_IMPORTED_MODULE_1__.createSelectorCreator)(reselect__WEBPACK_IMPORTED_MODULE_1__.defaultMemoize, isQueryEqual);

var getData = function getData(data, multiple, defaultData) {
  if (data !== null) {
    return data;
  }

  if (defaultData !== undefined) {
    return defaultData;
  }

  if (multiple) {
    return [];
  }

  return data;
};

var getQueryState = function getQueryState(state, type, requestKey) {
  if (requestKey === void 0) {
    requestKey = '';
  }

  return state.requests.queries[type + requestKey];
};

var createQuerySelector = function createQuerySelector(type, requestKey) {
  return createCustomSelector(function (state, defaultData, multiple) {
    var _state$requests$downl, _state$requests$uploa;

    // in order not to keep queryState.ref reference in selector memoize
    var _getQueryState = getQueryState(state, type, requestKey),
        data = _getQueryState.data,
        pending = _getQueryState.pending,
        error = _getQueryState.error,
        pristine = _getQueryState.pristine,
        normalized = _getQueryState.normalized,
        usedKeys = _getQueryState.usedKeys;

    return {
      data: data,
      pending: pending,
      error: error,
      pristine: pristine,
      normalized: normalized,
      usedKeys: usedKeys,
      multiple: multiple,
      defaultData: defaultData,
      normalizedData: state.requests.normalizedData,
      downloadProgress: (_state$requests$downl = state.requests.downloadProgress[type + (requestKey || '')]) != null ? _state$requests$downl : null,
      uploadProgress: (_state$requests$uploa = state.requests.uploadProgress[type + (requestKey || '')]) != null ? _state$requests$uploa : null
    };
  }, function (_ref) {
    var data = _ref.data,
        pending = _ref.pending,
        error = _ref.error,
        pristine = _ref.pristine,
        usedKeys = _ref.usedKeys,
        normalized = _ref.normalized,
        normalizedData = _ref.normalizedData,
        defaultData = _ref.defaultData,
        multiple = _ref.multiple,
        downloadProgress = _ref.downloadProgress,
        uploadProgress = _ref.uploadProgress;
    return {
      data: normalized ? (0,_normalizers__WEBPACK_IMPORTED_MODULE_3__.denormalize)(getData(data, multiple, defaultData), normalizedData, usedKeys) : getData(data, multiple, defaultData),
      pending: pending,
      loading: pending > 0,
      error: error,
      pristine: pristine,
      downloadProgress: downloadProgress,
      uploadProgress: uploadProgress
    };
  });
};

var defaultQuery = {
  data: null,
  pending: 0,
  loading: false,
  error: null,
  pristine: true,
  downloadProgress: null,
  uploadProgress: null
};

var defaultQueryMultiple = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultQuery, {
  data: []
});

var defaultQueriesWithCustomData = new Map();

var getDefaultQuery = function getDefaultQuery(defaultData, multiple) {
  if (defaultData !== undefined && defaultQueriesWithCustomData.get(defaultData)) {
    return defaultQueriesWithCustomData.get(defaultData);
  }

  if (defaultData !== undefined) {
    var query = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultQuery, {
      data: defaultData
    });

    defaultQueriesWithCustomData.set(defaultData, query);
    return query;
  }

  return multiple ? defaultQueryMultiple : defaultQuery;
};

var querySelectors = new WeakMap();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state, _ref2) {
  var type = _ref2.type,
      requestKey = _ref2.requestKey,
      defaultData = _ref2.defaultData,
      _ref2$multiple = _ref2.multiple,
      multiple = _ref2$multiple === void 0 ? false : _ref2$multiple;
  var queryState = getQueryState(state, type, requestKey);

  if (!queryState) {
    return getDefaultQuery(defaultData, multiple);
  }

  if (!querySelectors.get(queryState.ref)) {
    querySelectors.set(queryState.ref, createQuerySelector(type, requestKey));
  }

  return querySelectors.get(queryState.ref)(state, defaultData, multiple);
});

/***/ }),

/***/ "./src/selectors/get-websocket-state.js":
/*!**********************************************!*\
  !*** ./src/selectors/get-websocket-state.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (state) {
  return state.requests.websocket;
});

/***/ }),

/***/ "../../node_modules/deepmerge/dist/cjs.js":
/*!************************************************!*\
  !*** ../../node_modules/deepmerge/dist/cjs.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 133:0-14 */
/***/ ((module) => {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ "reselect":
/*!**************************************************************************************************!*\
  !*** external {"commonjs":"reselect","commonjs2":"reselect","amd":"reselect","root":"Reselect"} ***!
  \**************************************************************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_reselect__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});
//# sourceMappingURL=redux-requests.js.map