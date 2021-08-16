"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _defaultConfig = _interopRequireDefault(require("../default-config"));

var _actions = require("../actions");

var _constants = require("../constants");

var _default = function _default(state, action, config) {
  var _action$meta, _action$meta2;

  if (state === void 0) {
    state = [];
  }

  if (config === void 0) {
    config = _defaultConfig["default"];
  }

  if (config.ssr === 'server' && (0, _actions.isResponseAction)(action)) {
    return [].concat(state, [(0, _actions.getRequestActionFromResponse)(action).type + (action.meta.requestKey || '')]);
  }

  if (config.ssr === 'server' && action.type === _constants.JOIN_REQUEST && action.rehydrate) {
    return [].concat(state, [{
      requestType: action.requestType,
      duplicate: true
    }]);
  }

  if (config.ssr === 'client' && config.isRequestAction(action) && ((_action$meta = action.meta) != null && _action$meta.ssrResponse || (_action$meta2 = action.meta) != null && _action$meta2.ssrError)) {
    var indexToRemove = state.findIndex(function (v) {
      return (v.requestType || v) === action.type + (action.meta.requestKey || '');
    });

    if (indexToRemove >= 0) {
      return state.filter(function (_, i) {
        return i !== indexToRemove;
      });
    }
  }

  return state;
};

exports["default"] = _default;