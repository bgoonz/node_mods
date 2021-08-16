"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends5 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _actions = require("../actions");

var _default = function _default(state, action) {
  var _action$meta2, _extends4;

  if (!(0, _actions.isResponseAction)(action)) {
    var _action$meta, _extends2;

    var _mutationType = action.type + ((_action$meta = action.meta) != null && _action$meta.requestKey ? action.meta.requestKey : '');

    return (0, _extends5["default"])({}, state, (_extends2 = {}, _extends2[_mutationType] = {
      error: null,
      pending: (state[_mutationType] ? state[_mutationType].pending : 0) + 1,
      ref: state[_mutationType] ? state[_mutationType].ref : {}
    }, _extends2));
  }

  var requestAction = (0, _actions.getRequestActionFromResponse)(action);
  var mutationType = requestAction.type + ((_action$meta2 = action.meta) != null && _action$meta2.requestKey ? action.meta.requestKey : '');

  if ((0, _actions.isErrorAction)(action)) {
    var _extends3;

    return (0, _extends5["default"])({}, state, (_extends3 = {}, _extends3[mutationType] = {
      error: action.payload ? action.payload : action.error,
      pending: state[mutationType].pending - 1,
      ref: state[mutationType].ref
    }, _extends3));
  }

  if ((0, _actions.isAbortAction)(action) && state[mutationType].pending === 1 && state[mutationType].error === null) {
    return state;
  }

  return (0, _extends5["default"])({}, state, (_extends4 = {}, _extends4[mutationType] = {
    error: null,
    pending: state[mutationType].pending - 1,
    ref: state[mutationType].ref
  }, _extends4));
};

exports["default"] = _default;