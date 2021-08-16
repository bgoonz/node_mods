import _extends from "@babel/runtime/helpers/extends";
import { RESET_REQUESTS } from '../constants';
import { mapObject } from '../helpers';

var getRequestTypeString = function getRequestTypeString(requestType) {
  return typeof requestType === 'function' ? requestType.toString() : requestType;
};

var getKeys = function getKeys(requests) {
  return requests.map(function (v) {
    return typeof v === 'object' ? getRequestTypeString(v.requestType) + (v.requestKey || '') : getRequestTypeString(v);
  });
};

var resetQuery = function resetQuery(query) {
  return query.pending === 0 ? undefined : _extends({}, query, {
    data: null,
    error: null,
    pristine: true,
    usedKeys: query.normalized ? {} : null
  });
};

var resetMutation = function resetMutation(mutation) {
  return mutation.pending === 0 ? undefined : _extends({}, mutation, {
    error: null
  });
}; // TODO: probably move a cache module


var isCacheValid = function isCacheValid(cache, action) {
  var _action$meta;

  return cache.cacheKey === ((_action$meta = action.meta) == null ? void 0 : _action$meta.cacheKey) && (cache.timeout === null || Date.now() <= cache.timeout);
};

export default (function (state, action) {
  if (action.type !== RESET_REQUESTS) {
    return state;
  }

  var queries = state.queries,
      mutations = state.mutations,
      cache = state.cache,
      downloadProgress = state.downloadProgress,
      uploadProgress = state.uploadProgress;
  var clearAll = !action.requests;
  var keys = !clearAll && getKeys(action.requests);
  queries = mapObject(queries, function (k, v) {
    var cacheValue = cache[k];

    if ((clearAll || keys.includes(k)) && (action.resetCached || cacheValue === undefined || cacheValue && !isCacheValid(cacheValue, action))) {
      return resetQuery(v);
    }

    return v;
  });
  mutations = mapObject(mutations, function (k, v) {
    return clearAll || keys.includes(k) ? resetMutation(v) : v;
  });
  cache = clearAll && action.resetCached ? {} : mapObject(cache, function (k, v) {
    var cacheValue = cache[k];

    if ((clearAll || keys.includes(k)) && (action.resetCached || cacheValue === undefined || cacheValue && !isCacheValid(cacheValue, action))) {
      return undefined;
    }

    return v;
  });
  downloadProgress = clearAll ? {} : mapObject(downloadProgress, function (k, v) {
    return clearAll || keys.includes(k) ? resetMutation(v) : v;
  });
  uploadProgress = clearAll ? {} : mapObject(uploadProgress, function (k, v) {
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