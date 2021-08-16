import _extends from "@babel/runtime/helpers/extends";
import defaultConfig from '../default-config';
import { getQuery } from '../selectors';

var isCacheValid = function isCacheValid(cache, action) {
  return cache.cacheKey === action.meta.cacheKey && (cache.timeout === null || Date.now() <= cache.timeout);
};

var getKey = function getKey(action) {
  return action.type + (action.meta.requestKey || '');
};

export default (function (config) {
  if (config === void 0) {
    config = defaultConfig;
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

            var query = getQuery(state, {
              type: action.type,
              requestKey: (_action$meta2 = action.meta) == null ? void 0 : _action$meta2.requestKey
            });
            return next(_extends({}, action, {
              meta: _extends({}, action.meta, {
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