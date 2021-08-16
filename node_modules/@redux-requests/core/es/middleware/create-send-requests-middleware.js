import _extends from "@babel/runtime/helpers/extends";
import { getActionPayload, createSuccessAction, createErrorAction, createAbortAction, setDownloadProgress, setUploadProgress } from '../actions';
import { ABORT_REQUESTS, RESET_REQUESTS, JOIN_REQUEST } from '../constants';
import { getQuery } from '../selectors';
import createRequestsStore from './create-requests-store';

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
  var payload = getActionPayload(action);
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
  var payload = getActionPayload(action);

  if (config.onRequest && (!action.meta || action.meta.runOnRequest !== false && !action.meta.ssrDuplicate)) {
    if (action.request) {
      return _extends({}, action, {
        request: config.onRequest(payload.request, action, store)
      });
    }

    return _extends({}, action, {
      payload: _extends({}, action.payload, {
        request: config.onRequest(payload.request, action, store)
      })
    });
  }

  return action;
};

var maybeCallOnRequestMeta = function maybeCallOnRequestMeta(action, store) {
  var _action$meta7;

  var payload = getActionPayload(action);

  if ((_action$meta7 = action.meta) != null && _action$meta7.onRequest && !action.meta.ssrDuplicate) {
    if (action.request) {
      return _extends({}, action, {
        request: action.meta.onRequest(payload.request, action, store)
      });
    }

    return _extends({}, action, {
      payload: _extends({}, action.payload, {
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

      return store.dispatch(setDownloadProgress(action.type + (((_action$meta9 = action.meta) == null ? void 0 : _action$meta9.requestKey) || ''), progress));
    };
  }

  if ((_action$meta10 = action.meta) != null && _action$meta10.measureUploadProgress) {
    driverActions.setUploadProgress = function (progress) {
      var _action$meta11;

      return store.dispatch(setUploadProgress(action.type + (((_action$meta11 = action.meta) == null ? void 0 : _action$meta11.requestKey) || ''), progress));
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

  var actionPayload = getActionPayload(action);
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
  var actionPayload = getActionPayload(action);
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

    var query = getQuery(store.getState(), {
      type: action.type,
      requestKey: (_action$meta19 = action.meta) == null ? void 0 : _action$meta19.requestKey
    });
    return _extends({}, response, {
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
        var payload = getActionPayload(action);
        var requestsStore = createRequestsStore(store);

        if (action.type === JOIN_REQUEST) {
          next(action);
          return allPendingRequests[action.requestType] || sleep();
        }

        if (action.type === ABORT_REQUESTS || action.type === RESET_REQUESTS && payload.abortPending) {
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
              var abortAction = createAbortAction(action);

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

            var errorAction = createErrorAction(action, error);

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
            var successAction = createSuccessAction(action, response);

            if (!action.meta || !action.meta.silent) {
              store.dispatch(successAction);
            }

            allPendingRequests[lastActionKey].resolve(_extends({
              action: successAction
            }, response));
            return _extends({
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

export default createSendRequestMiddleware;