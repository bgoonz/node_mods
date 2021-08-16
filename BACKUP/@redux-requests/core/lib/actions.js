"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.stopSubscriptions = exports.closeWebsocket = exports.openWebsocket = exports.getWebsocket = exports.websocketClosed = exports.websocketOpened = exports.joinRequest = exports.removeWatcher = exports.addWatcher = exports.setUploadProgress = exports.setDownloadProgress = exports.stopPolling = exports.abortRequests = exports.resetRequests = exports.clearRequestsCache = exports.isRequestActionQuery = exports.isAbortAction = exports.isErrorAction = exports.isSuccessAction = exports.getRequestActionFromResponse = exports.isResponseAction = exports.isRequestAction = exports.getResponseFromSuccessAction = exports.getActionPayload = exports.createAbortAction = exports.createErrorAction = exports.createSuccessAction = exports.abort = exports.error = exports.success = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _constants = require("./constants");

var getActionWithSuffix = function getActionWithSuffix(suffix) {
  return function (actionType) {
    return actionType + suffix;
  };
};

var success = getActionWithSuffix(_constants.SUCCESS_SUFFIX);
exports.success = success;
var error = getActionWithSuffix(_constants.ERROR_SUFFIX);
exports.error = error;
var abort = getActionWithSuffix(_constants.ABORT_SUFFIX);
exports.abort = abort;

var isFSA = function isFSA(action) {
  return !!action.payload;
};

var createSuccessAction = function createSuccessAction(action, response) {
  return (0, _extends2["default"])({
    type: success(action.type)
  }, isFSA(action) ? {
    payload: response
  } : {
    response: response
  }, {
    meta: (0, _extends2["default"])({}, action.meta, {
      requestAction: action
    })
  });
};

exports.createSuccessAction = createSuccessAction;

var createErrorAction = function createErrorAction(action, errorData) {
  return (0, _extends2["default"])({
    type: error(action.type)
  }, isFSA(action) ? {
    payload: errorData,
    error: true
  } : {
    error: errorData
  }, {
    meta: (0, _extends2["default"])({}, action.meta, {
      requestAction: action
    })
  });
};

exports.createErrorAction = createErrorAction;

var createAbortAction = function createAbortAction(action) {
  return {
    type: abort(action.type),
    meta: (0, _extends2["default"])({}, action.meta, {
      requestAction: action
    })
  };
};

exports.createAbortAction = createAbortAction;

var getActionPayload = function getActionPayload(action) {
  return action.payload === undefined ? action : action.payload;
}; // eslint-disable-next-line import/no-unused-modules


exports.getActionPayload = getActionPayload;

var getResponseFromSuccessAction = function getResponseFromSuccessAction(action) {
  return action.payload ? action.payload : action.response;
};

exports.getResponseFromSuccessAction = getResponseFromSuccessAction;

var isRequestAction = function isRequestAction(action) {
  var actionPayload = getActionPayload(action);
  return !!(actionPayload != null && actionPayload.request) && !!(Array.isArray(actionPayload.request) || actionPayload.request.url || actionPayload.request.query || actionPayload.request.promise || actionPayload.request.response || actionPayload.request.error) && !actionPayload.response && !(actionPayload instanceof Error);
};

exports.isRequestAction = isRequestAction;

var isResponseAction = function isResponseAction(action) {
  var _action$meta;

  return !!((_action$meta = action.meta) != null && _action$meta.requestAction);
};

exports.isResponseAction = isResponseAction;

var getRequestActionFromResponse = function getRequestActionFromResponse(action) {
  return action.meta.requestAction;
};

exports.getRequestActionFromResponse = getRequestActionFromResponse;

var isSuccessAction = function isSuccessAction(action) {
  return isResponseAction(action) && action.type.endsWith(_constants.SUCCESS_SUFFIX);
};

exports.isSuccessAction = isSuccessAction;

var isErrorAction = function isErrorAction(action) {
  return isResponseAction(action) && action.type.endsWith(_constants.ERROR_SUFFIX);
};

exports.isErrorAction = isErrorAction;

var isAbortAction = function isAbortAction(action) {
  return isResponseAction(action) && action.type.endsWith(_constants.ABORT_SUFFIX);
};

exports.isAbortAction = isAbortAction;

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

exports.isRequestActionQuery = isRequestActionQuery;

var clearRequestsCache = function clearRequestsCache(requests) {
  if (requests === void 0) {
    requests = null;
  }

  return {
    type: _constants.CLEAR_REQUESTS_CACHE,
    requests: requests
  };
};

exports.clearRequestsCache = clearRequestsCache;

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
    type: _constants.RESET_REQUESTS,
    requests: requests,
    abortPending: abortPending,
    resetCached: resetCached
  };
};

exports.resetRequests = resetRequests;

var abortRequests = function abortRequests(requests) {
  if (requests === void 0) {
    requests = null;
  }

  return {
    type: _constants.ABORT_REQUESTS,
    requests: requests
  };
};

exports.abortRequests = abortRequests;

var stopPolling = function stopPolling(requests) {
  if (requests === void 0) {
    requests = null;
  }

  return {
    type: _constants.STOP_POLLING,
    requests: requests
  };
};

exports.stopPolling = stopPolling;

var setDownloadProgress = function setDownloadProgress(requestType, progress) {
  return {
    type: _constants.SET_DOWNLOAD_PROGRESS,
    requestType: requestType,
    progress: progress
  };
};

exports.setDownloadProgress = setDownloadProgress;

var setUploadProgress = function setUploadProgress(requestType, progress) {
  return {
    type: _constants.SET_UPLOAD_PROGRESS,
    requestType: requestType,
    progress: progress
  };
};

exports.setUploadProgress = setUploadProgress;

var addWatcher = function addWatcher(requestType) {
  return {
    type: _constants.ADD_WATCHER,
    requestType: requestType
  };
};

exports.addWatcher = addWatcher;

var removeWatcher = function removeWatcher(requestType) {
  return {
    type: _constants.REMOVE_WATCHER,
    requestType: requestType
  };
};

exports.removeWatcher = removeWatcher;

var joinRequest = function joinRequest(requestType, rehydrate) {
  if (rehydrate === void 0) {
    rehydrate = false;
  }

  return {
    type: _constants.JOIN_REQUEST,
    requestType: requestType,
    rehydrate: rehydrate
  };
};

exports.joinRequest = joinRequest;

var websocketOpened = function websocketOpened() {
  return {
    type: _constants.WEBSOCKET_OPENED
  };
};

exports.websocketOpened = websocketOpened;

var websocketClosed = function websocketClosed(code) {
  return {
    type: _constants.WEBSOCKET_CLOSED,
    code: code
  };
};

exports.websocketClosed = websocketClosed;

var getWebsocket = function getWebsocket() {
  return {
    type: _constants.GET_WEBSOCKET
  };
};

exports.getWebsocket = getWebsocket;

var openWebsocket = function openWebsocket(props) {
  if (props === void 0) {
    props = null;
  }

  return {
    type: _constants.OPEN_WEBSOCKET,
    props: props
  };
};

exports.openWebsocket = openWebsocket;

var closeWebsocket = function closeWebsocket(code) {
  if (code === void 0) {
    code = 1000;
  }

  return {
    type: _constants.CLOSE_WEBSOCKET,
    code: code
  };
};

exports.closeWebsocket = closeWebsocket;

var stopSubscriptions = function stopSubscriptions(subscriptions) {
  if (subscriptions === void 0) {
    subscriptions = null;
  }

  return {
    type: _constants.STOP_SUBSCRIPTIONS,
    subscriptions: subscriptions
  };
};

exports.stopSubscriptions = stopSubscriptions;