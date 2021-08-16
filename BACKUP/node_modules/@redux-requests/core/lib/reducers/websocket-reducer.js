"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _constants = require("../constants");

var _default = function _default(state, action, config) {
  if (config.ssr === 'server') {
    return state;
  }

  if (action.type === _constants.WEBSOCKET_OPENED) {
    return {
      pristine: false,
      connected: true
    };
  }

  if (action.type === _constants.WEBSOCKET_CLOSED) {
    return {
      pristine: action.code === 1000,
      connected: false
    };
  }

  return state;
};

exports["default"] = _default;