import defaultConfig from '../default-config';
import { getRequestActionFromResponse, isResponseAction } from '../actions';
import { JOIN_REQUEST } from '../constants';
export default (function (state, action, config) {
  var _action$meta, _action$meta2;

  if (state === void 0) {
    state = [];
  }

  if (config === void 0) {
    config = defaultConfig;
  }

  if (config.ssr === 'server' && isResponseAction(action)) {
    return [].concat(state, [getRequestActionFromResponse(action).type + (action.meta.requestKey || '')]);
  }

  if (config.ssr === 'server' && action.type === JOIN_REQUEST && action.rehydrate) {
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
});