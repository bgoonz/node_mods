"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _getMutation = _interopRequireDefault(require("./get-mutation"));

var _default = function _default(props) {
  return function (state) {
    return (0, _getMutation["default"])(state, props);
  };
};

exports["default"] = _default;