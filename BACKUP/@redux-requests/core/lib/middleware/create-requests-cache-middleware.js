"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defaultConfig = _interopRequireDefault(require("../default-config"));

var _selectors = require("../selectors");

var isCacheValid = function isCacheValid(cache, action) {
  return cache.cacheKey === action.meta.cacheKey && (cache.timeout === null || Date.now() <= cache.timeout);
};

var getKey = function getKey(action) {
  return action.type + (action.meta.requestKey || '');
};

var _default = function _default(config) {
  if (config === void 0) {
    config = _defaultConfig["default"];
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

            var query = (0, _selectors.getQuery)(state, {
              type: action.type,
              requestKey: (_action$meta2 = action.meta) == null ? void 0 : _action$meta2.requestKey
            });
            return next((0, _extends2["default"])({}, action, {
              meta: (0, _extends2["default"])({}, action.meta, {
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
};

exports["default"] = _default;