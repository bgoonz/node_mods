"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defaultConfig = _interopRequireDefault(require("../default-config"));

var _constants = require("../constants");

var getIntervalKey = function getIntervalKey(action) {
  var _action$meta;

  return action.type + (((_action$meta = action.meta) == null ? void 0 : _action$meta.requestKey) || '');
};

var getKeys = function getKeys(requests) {
  return requests.map(function (v) {
    return typeof v === 'object' ? v.requestType.toString() + (v.requestKey || '') : v.toString();
  });
};

var _default = function _default(config) {
  if (config === void 0) {
    config = _defaultConfig["default"];
  }

  var intervals = {};
  return function (store) {
    return function (next) {
      return function (action) {
        var _action$meta2, _action$meta3;

        if (action.type === _constants.STOP_POLLING || action.type === _constants.RESET_REQUESTS) {
          if (!action.requests) {
            Object.values(intervals).forEach(clearInterval);
            intervals = {};
          } else {
            var keys = getKeys(action.requests);
            var intervalsCopy = (0, _extends2["default"])({}, intervals);
            keys.forEach(function (k) {
              clearInterval(intervalsCopy[k]);
              delete intervalsCopy[k];
            });
            intervals = intervalsCopy;
          }
        } else if (config.isRequestAction(action) && config.isRequestActionQuery(action) && !((_action$meta2 = action.meta) != null && _action$meta2.polled) && intervals[getIntervalKey(action)]) {
          var _intervalsCopy = (0, _extends2["default"])({}, intervals);

          clearInterval(intervals[getIntervalKey(action)]);
          delete _intervalsCopy[getIntervalKey(action)];
          intervals = _intervalsCopy;
        }

        if (config.isRequestAction(action) && config.isRequestActionQuery(action) && (_action$meta3 = action.meta) != null && _action$meta3.poll && !action.meta.polled) {
          intervals[getIntervalKey(action)] = setInterval(function () {
            store.dispatch((0, _extends2["default"])({}, action, {
              meta: (0, _extends2["default"])({}, action.meta, {
                polled: true
              })
            }));
          }, action.meta.poll * 1000);
        }

        return next(action);
      };
    };
  };
};

exports["default"] = _default;