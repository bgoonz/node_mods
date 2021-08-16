import _extends from "@babel/runtime/helpers/extends";
import { isErrorAction, isAbortAction, isResponseAction, getRequestActionFromResponse } from '../actions';
export default (function (state, action) {
  var _action$meta2, _extends4;

  if (!isResponseAction(action)) {
    var _action$meta, _extends2;

    var _mutationType = action.type + ((_action$meta = action.meta) != null && _action$meta.requestKey ? action.meta.requestKey : '');

    return _extends({}, state, (_extends2 = {}, _extends2[_mutationType] = {
      error: null,
      pending: (state[_mutationType] ? state[_mutationType].pending : 0) + 1,
      ref: state[_mutationType] ? state[_mutationType].ref : {}
    }, _extends2));
  }

  var requestAction = getRequestActionFromResponse(action);
  var mutationType = requestAction.type + ((_action$meta2 = action.meta) != null && _action$meta2.requestKey ? action.meta.requestKey : '');

  if (isErrorAction(action)) {
    var _extends3;

    return _extends({}, state, (_extends3 = {}, _extends3[mutationType] = {
      error: action.payload ? action.payload : action.error,
      pending: state[mutationType].pending - 1,
      ref: state[mutationType].ref
    }, _extends3));
  }

  if (isAbortAction(action) && state[mutationType].pending === 1 && state[mutationType].error === null) {
    return state;
  }

  return _extends({}, state, (_extends4 = {}, _extends4[mutationType] = {
    error: null,
    pending: state[mutationType].pending - 1,
    ref: state[mutationType].ref
  }, _extends4));
});