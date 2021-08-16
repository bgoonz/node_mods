"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends4 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _constants = require("../constants");

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var _default = function _default(state, action, config) {
  if (config.ssr === 'server') {
    return state;
  }

  if (action.type === _constants.ADD_WATCHER) {
    var _extends2;

    return (0, _extends4["default"])({}, state, (_extends2 = {}, _extends2[action.requestType] = state[action.requestType] === undefined ? 1 : state[action.requestType] + 1, _extends2));
  }

  if (action.type === _constants.REMOVE_WATCHER && state[action.requestType] === 1) {
    // eslint-disable-next-line no-unused-vars
    var _action$requestType = action.requestType,
        toRemove = state[_action$requestType],
        remaining = (0, _objectWithoutPropertiesLoose2["default"])(state, [_action$requestType].map(_toPropertyKey));
    return remaining;
  }

  if (action.type === _constants.REMOVE_WATCHER && state[action.requestType] !== 1) {
    var _extends3;

    return (0, _extends4["default"])({}, state, (_extends3 = {}, _extends3[action.requestType] = state[action.requestType] - 1, _extends3));
  }

  return state;
};

exports["default"] = _default;