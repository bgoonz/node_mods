"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _default = function _default(store) {
  return (0, _extends2["default"])({}, store, {
    dispatchRequest: store.dispatch
  });
};

exports["default"] = _default;