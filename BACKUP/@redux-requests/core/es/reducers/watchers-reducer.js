import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/extends";

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

import { ADD_WATCHER, REMOVE_WATCHER } from '../constants';
export default (function (state, action, config) {
  if (config.ssr === 'server') {
    return state;
  }

  if (action.type === ADD_WATCHER) {
    var _extends2;

    return _extends({}, state, (_extends2 = {}, _extends2[action.requestType] = state[action.requestType] === undefined ? 1 : state[action.requestType] + 1, _extends2));
  }

  if (action.type === REMOVE_WATCHER && state[action.requestType] === 1) {
    // eslint-disable-next-line no-unused-vars
    var _action$requestType = action.requestType,
        toRemove = state[_action$requestType],
        remaining = _objectWithoutPropertiesLoose(state, [_action$requestType].map(_toPropertyKey));

    return remaining;
  }

  if (action.type === REMOVE_WATCHER && state[action.requestType] !== 1) {
    var _extends3;

    return _extends({}, state, (_extends3 = {}, _extends3[action.requestType] = state[action.requestType] - 1, _extends3));
  }

  return state;
});