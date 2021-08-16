import _extends from "@babel/runtime/helpers/extends";
import { SUCCESS_SUFFIX, ERROR_SUFFIX, ABORT_SUFFIX, CLEAR_REQUESTS_CACHE, RESET_REQUESTS, ABORT_REQUESTS, SET_DOWNLOAD_PROGRESS, SET_UPLOAD_PROGRESS, ADD_WATCHER, REMOVE_WATCHER, JOIN_REQUEST, STOP_POLLING, WEBSOCKET_OPENED, WEBSOCKET_CLOSED, GET_WEBSOCKET, OPEN_WEBSOCKET, CLOSE_WEBSOCKET, STOP_SUBSCRIPTIONS } from './constants';

var getActionWithSuffix = function getActionWithSuffix(suffix) {
  return function (actionType) {
    return actionType + suffix;
  };
};

export var success = getActionWithSuffix(SUCCESS_SUFFIX);
export var error = getActionWithSuffix(ERROR_SUFFIX);
export var abort = getActionWithSuffix(ABORT_SUFFIX);

var isFSA = function isFSA(action) {
  return !!action.payload;
};

export var createSuccessAction = function createSuccessAction(action, response) {
  return _extends({
    type: success(action.type)
  }, isFSA(action) ? {
    payload: response
  } : {
    response: response
  }, {
    meta: _extends({}, action.meta, {
      requestAction: action
    })
  });
};
export var createErrorAction = function createErrorAction(action, errorData) {
  return _extends({
    type: error(action.type)
  }, isFSA(action) ? {
    payload: errorData,
    error: true
  } : {
    error: errorData
  }, {
    meta: _extends({}, action.meta, {
      requestAction: action
    })
  });
};
export var createAbortAction = function createAbortAction(action) {
  return {
    type: abort(action.type),
    meta: _extends({}, action.meta, {
      requestAction: action
    })
  };
};
export var getActionPayload = function getActionPayload(action) {
  return action.payload === undefined ? action : action.payload;
}; // eslint-disable-next-line import/no-unused-modules

export var getResponseFromSuccessAction = function getResponseFromSuccessAction(action) {
  return action.payload ? action.payload : action.response;
};
export var isRequestAction = function isRequestAction(action) {
  var actionPayload = getActionPayload(action);
  return !!(actionPayload != null && actionPayload.request) && !!(Array.isArray(actionPayload.request) || actionPayload.request.url || actionPayload.request.query || actionPayload.request.promise || actionPayload.request.response || actionPayload.request.error) && !actionPayload.response && !(actionPayload instanceof Error);
};
export var isResponseAction = function isResponseAction(action) {
  var _action$meta;

  return !!((_action$meta = action.meta) != null && _action$meta.requestAction);
};
export var getRequestActionFromResponse = function getRequestActionFromResponse(action) {
  return action.meta.requestAction;
};
export var isSuccessAction = function isSuccessAction(action) {
  return isResponseAction(action) && action.type.endsWith(SUCCESS_SUFFIX);
};
export var isErrorAction = function isErrorAction(action) {
  return isResponseAction(action) && action.type.endsWith(ERROR_SUFFIX);
};
export var isAbortAction = function isAbortAction(action) {
  return isResponseAction(action) && action.type.endsWith(ABORT_SUFFIX);
};

var isRequestQuery = function isRequestQuery(request) {
  return !request.query && (!request.method || request.method.toLowerCase() === 'get') || request.query && !request.query.trim().startsWith('mutation');
};

export var isRequestActionQuery = function isRequestActionQuery(action) {
  var _action$meta2;

  var _getActionPayload = getActionPayload(action),
      request = _getActionPayload.request;

  if (((_action$meta2 = action.meta) == null ? void 0 : _action$meta2.asMutation) !== undefined) {
    return !action.meta.asMutation;
  }

  return !!(Array.isArray(request) ? request.every(isRequestQuery) : isRequestQuery(request));
};
export var clearRequestsCache = function clearRequestsCache(requests) {
  if (requests === void 0) {
    requests = null;
  }

  return {
    type: CLEAR_REQUESTS_CACHE,
    requests: requests
  };
};
export var resetRequests = function resetRequests(requests, abortPending, resetCached) {
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
    type: RESET_REQUESTS,
    requests: requests,
    abortPending: abortPending,
    resetCached: resetCached
  };
};
export var abortRequests = function abortRequests(requests) {
  if (requests === void 0) {
    requests = null;
  }

  return {
    type: ABORT_REQUESTS,
    requests: requests
  };
};
export var stopPolling = function stopPolling(requests) {
  if (requests === void 0) {
    requests = null;
  }

  return {
    type: STOP_POLLING,
    requests: requests
  };
};
export var setDownloadProgress = function setDownloadProgress(requestType, progress) {
  return {
    type: SET_DOWNLOAD_PROGRESS,
    requestType: requestType,
    progress: progress
  };
};
export var setUploadProgress = function setUploadProgress(requestType, progress) {
  return {
    type: SET_UPLOAD_PROGRESS,
    requestType: requestType,
    progress: progress
  };
};
export var addWatcher = function addWatcher(requestType) {
  return {
    type: ADD_WATCHER,
    requestType: requestType
  };
};
export var removeWatcher = function removeWatcher(requestType) {
  return {
    type: REMOVE_WATCHER,
    requestType: requestType
  };
};
export var joinRequest = function joinRequest(requestType, rehydrate) {
  if (rehydrate === void 0) {
    rehydrate = false;
  }

  return {
    type: JOIN_REQUEST,
    requestType: requestType,
    rehydrate: rehydrate
  };
};
export var websocketOpened = function websocketOpened() {
  return {
    type: WEBSOCKET_OPENED
  };
};
export var websocketClosed = function websocketClosed(code) {
  return {
    type: WEBSOCKET_CLOSED,
    code: code
  };
};
export var getWebsocket = function getWebsocket() {
  return {
    type: GET_WEBSOCKET
  };
};
export var openWebsocket = function openWebsocket(props) {
  if (props === void 0) {
    props = null;
  }

  return {
    type: OPEN_WEBSOCKET,
    props: props
  };
};
export var closeWebsocket = function closeWebsocket(code) {
  if (code === void 0) {
    code = 1000;
  }

  return {
    type: CLOSE_WEBSOCKET,
    code: code
  };
};
export var stopSubscriptions = function stopSubscriptions(subscriptions) {
  if (subscriptions === void 0) {
    subscriptions = null;
  }

  return {
    type: STOP_SUBSCRIPTIONS,
    subscriptions: subscriptions
  };
};