"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _constants = require("../constants");

var _helpers = require("../helpers");

var getRequestTypeString = function getRequestTypeString(requestType) {
  return typeof requestType === 'function' ? requestType.toString() : requestType;
};

var getKeys = function getKeys(requests) {
  return requests.map(function (v) {
    return typeof v === 'object' ? getRequestTypeString(v.requestType) + (v.requestKey || '') : getRequestTypeString(v);
  });
};

var resetQuery = function resetQuery(query) {
  return query.pending === 0 ? undefined : (0, _extends2["default"])({}, query, {
    data: null,
    error: null,
    pristine: true,
    usedKeys: query.normalized ? {} : null
  });
};

var resetMutation = function resetMutation(mutation) {
  return mutation.pending === 0 ? undefined : (0, _extends2["default"])({}, mutation, {
    error: null
  });
}; // TODO: probably move a cache module


var isCacheValid = function isCacheValid(cache, action) {
  var _action$meta;

  return cache.cacheKey === ((_action$meta = action.meta) == null ? void 0 : _action$meta.cacheKey) && (cache.timeout === null || Date.now() <= cache.timeout);
};

var _default = function _default(state, action) {
  if (action.type !== _constants.RESET_REQUESTS) {
    return state;
  }

  var queries = state.queries,
      mutations = state.mutations,
      cache = state.cache,
      downloadProgress = state.downloadProgress,
      uploadProgress = state.uploadProgress;
  var clearAll = !action.requests;
  var keys = !clearAll && getKeys(action.requests);
  queries = (0, _helpers.mapObject)(queries, function (k, v) {
    var cacheValue = cache[k];

    if ((clearAll || keys.includes(k)) && (action.resetCached || cacheValue === undefined || cacheValue && !isCacheValid(cacheValue, action))) {
      return resetQuery(v);
    }

    return v;
  });
  mutations = (0, _helpers.mapObject)(mutations, function (k, v) {
    return clearAll || keys.includes(k) ? resetMutation(v) : v;
  });
  cache = clearAll && action.resetCached ? {} : (0, _helpers.mapObject)(cache, function (k, v) {
    var cacheValue = cache[k];

    if ((clearAll || keys.includes(k)) && (action.resetCached || cacheValue === undefined || cacheValue && !isCacheValid(cacheValue, action))) {
      return undefined;
    }

    return v;
  });
  downloadProgress = clearAll ? {} : (0, _helpers.mapObject)(downloadProgress, function (k, v) {
    return clearAll || keys.includes(k) ? resetMutation(v) : v;
  });
  uploadProgress = clearAll ? {} : (0, _helpers.mapObject)(uploadProgress, function (k, v) {
    return clearAll || keys.includes(k) ? resetMutation(v) : v;
  });
  return {
    queries: queries,
    mutations: mutations,
    cache: cache,
    downloadProgress: downloadProgress,
    uploadProgress: uploadProgress
  };
};

exports["default"] = _default;