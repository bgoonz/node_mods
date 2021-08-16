"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defaultConfig = _interopRequireDefault(require("../default-config"));

var _selectors = require("../selectors");

var _default = function _default(config) {
  if (config === void 0) {
    config = _defaultConfig["default"];
  }

  return function (store) {
    return function (next) {
      return function (action) {
        var _action$meta2;

        if (!config.isRequestAction(action)) {
          return next(action);
        }

        var state = store.getState();
        var actionsToIgnore = state.requests.ssr;
        var actionToIgnore = actionsToIgnore.find(function (v) {
          var _action$meta;

          return (v.requestType || v) === action.type + (((_action$meta = action.meta) == null ? void 0 : _action$meta.requestKey) || '');
        });

        if (!actionToIgnore) {
          return next(action);
        }

        var query = (0, _selectors.getQuery)(state, {
          type: action.type,
          requestKey: (_action$meta2 = action.meta) == null ? void 0 : _action$meta2.requestKey
        });
        action.meta = actionToIgnore.duplicate ? (0, _extends2["default"])({}, action.meta, {
          ssrDuplicate: true
        }) : action.meta;

        if (query.error) {
          return next((0, _extends2["default"])({}, action, {
            meta: (0, _extends2["default"])({}, action.meta, {
              ssrError: query.error
            })
          }));
        }

        return next((0, _extends2["default"])({}, action, {
          meta: (0, _extends2["default"])({}, action.meta, {
            ssrResponse: {
              data: query.data
            }
          })
        }));
      };
    };
  };
};

exports["default"] = _default;