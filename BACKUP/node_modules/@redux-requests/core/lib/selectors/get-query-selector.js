"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _getQuery = _interopRequireDefault(require("./get-query"));

var _default = function _default(props) {
  return function (state) {
    return (0, _getQuery["default"])(state, props);
  };
};

exports["default"] = _default;