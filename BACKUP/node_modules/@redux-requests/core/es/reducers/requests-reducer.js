import _extends from "@babel/runtime/helpers/extends";
import defaultConfig from '../default-config';
import { isResponseAction, getRequestActionFromResponse } from '../actions';
import queriesReducer from './queries-reducer';
import mutationsReducer from './mutations-reducer';
import requestKeysReducer from './requests-keys-reducer';
import cacheReducer from './cache-reducer';
import progressReducer from './progress-reducer';
import requestsResetReducer from './requests-reset-reducer';
import ssrReducer from './ssr-reducer';
import watchersReducer from './watchers-reducer';
import websocketReducer from './websocket-reducer';
var defaultState = {
  queries: {},
  mutations: {},
  normalizedData: {},
  cache: {},
  downloadProgress: {},
  uploadProgress: {},
  requestsKeys: {},
  watchers: {},
  websocket: {
    pristine: true,
    connected: false
  }
};
export default (function (config) {
  if (config === void 0) {
    config = defaultConfig;
  }

  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    var _queriesReducer = queriesReducer({
      queries: state.queries,
      normalizedData: state.normalizedData
    }, action, config),
        queries = _queriesReducer.queries,
        normalizedData = _queriesReducer.normalizedData;

    var _state = state,
        mutations = _state.mutations;

    if (config.isRequestAction(action) && !config.isRequestActionQuery(action) || isResponseAction(action) && !config.isRequestActionQuery(getRequestActionFromResponse(action))) {
      mutations = mutationsReducer(mutations, action);
    }

    return _extends({}, requestKeysReducer(_extends({}, requestsResetReducer(_extends({
      queries: queries,
      mutations: mutations,
      cache: cacheReducer(state.cache, action)
    }, progressReducer({
      downloadProgress: state.downloadProgress,
      uploadProgress: state.uploadProgress
    }, action, config)), action), {
      requestsKeys: state.requestsKeys
    }), action, config), {
      normalizedData: normalizedData,
      ssr: config.ssr ? ssrReducer(state.ssr, action, config) : null,
      watchers: watchersReducer(state.watchers, action, config),
      websocket: websocketReducer(state.websocket, action, config)
    });
  };
});