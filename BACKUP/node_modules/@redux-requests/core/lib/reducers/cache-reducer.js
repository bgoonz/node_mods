"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _constants = require("../constants");

var _actions = require("../actions");

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

var _default = function _default(state, action) {
  if (action.type === _constants.CLEAR_REQUESTS_CACHE) {
    if (!action.requests) {
      return {};
    }

    state = (0, _extends3["default"])({}, state);
    getRequestKeys(action.requests).forEach(function (requestKey) {
      delete state[requestKey];
    });
    return state;
  }

  if ((0, _actions.isSuccessAction)(action) && action.meta.cache && !action.meta.cacheResponse && !action.meta.ssrResponse) {
    var _extends2;

    var requestAction = (0, _actions.getRequestActionFromResponse)(action);
    return (0, _extends3["default"])({}, state, (_extends2 = {}, _extends2[getRequestKey(requestAction)] = {
      timeout: getNewCacheTimeout(action.meta.cache),
      cacheKey: action.meta.cacheKey
    }, _extends2));
  }

  return state;
};

exports["default"] = _default;