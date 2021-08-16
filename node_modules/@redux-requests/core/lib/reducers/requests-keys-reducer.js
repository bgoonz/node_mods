"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends5 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defaultConfig = _interopRequireDefault(require("../default-config"));

// TODO: this should be rewritten to more functional style, we need things like filter object helpers
var _default = function _default(state, action, config) {
  var _action$meta;

  if (config === void 0) {
    config = _defaultConfig["default"];
  }

  if (config.isRequestAction(action) && ((_action$meta = action.meta) == null ? void 0 : _action$meta.requestKey) !== undefined) {
    var queries = state.queries,
        mutations = state.mutations,
        cache = state.cache,
        requestsKeys = state.requestsKeys;

    if (!requestsKeys[action.type]) {
      var _extends2;

      requestsKeys = (0, _extends5["default"])({}, requestsKeys, (_extends2 = {}, _extends2[action.type] = [action.meta.requestKey], _extends2));
    } else {
      var _extends3;

      requestsKeys = (0, _extends5["default"])({}, requestsKeys, (_extends3 = {}, _extends3[action.type] = [].concat(requestsKeys[action.type].filter(function (k) {
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

          requestsKeys = (0, _extends5["default"])({}, requestsKeys, (_extends4 = {}, _extends4[action.type] = requestsKeys[action.type].filter(function (k) {
            return !exceedingRequestsKeys.includes(k);
          }), _extends4));
          var copiedStorage = (0, _extends5["default"])({}, requestsStorage);
          exceedingRequestsKeys.forEach(function (k) {
            delete copiedStorage[action.type + k];
          });

          if (isQuery) {
            queries = copiedStorage;
            var copiedCache = (0, _extends5["default"])({}, cache);
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
};

exports["default"] = _default;