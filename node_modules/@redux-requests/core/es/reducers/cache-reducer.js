import _extends from "@babel/runtime/helpers/extends";
import { CLEAR_REQUESTS_CACHE } from '../constants';
import { isSuccessAction, getRequestActionFromResponse } from '../actions';

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

export default (function (state, action) {
  if (action.type === CLEAR_REQUESTS_CACHE) {
    if (!action.requests) {
      return {};
    }

    state = _extends({}, state);
    getRequestKeys(action.requests).forEach(function (requestKey) {
      delete state[requestKey];
    });
    return state;
  }

  if (isSuccessAction(action) && action.meta.cache && !action.meta.cacheResponse && !action.meta.ssrResponse) {
    var _extends2;

    var requestAction = getRequestActionFromResponse(action);
    return _extends({}, state, (_extends2 = {}, _extends2[getRequestKey(requestAction)] = {
      timeout: getNewCacheTimeout(action.meta.cache),
      cacheKey: action.meta.cacheKey
    }, _extends2));
  }

  return state;
});