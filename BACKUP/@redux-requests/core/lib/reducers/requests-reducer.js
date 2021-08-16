"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defaultConfig = _interopRequireDefault(require("../default-config"));

var _actions = require("../actions");

var _queriesReducer2 = _interopRequireDefault(require("./queries-reducer"));

var _mutationsReducer = _interopRequireDefault(require("./mutations-reducer"));

var _requestsKeysReducer = _interopRequireDefault(require("./requests-keys-reducer"));

var _cacheReducer = _interopRequireDefault(require("./cache-reducer"));

var _progressReducer = _interopRequireDefault(require("./progress-reducer"));

var _requestsResetReducer = _interopRequireDefault(require("./requests-reset-reducer"));

var _ssrReducer = _interopRequireDefault(require("./ssr-reducer"));

var _watchersReducer = _interopRequireDefault(require("./watchers-reducer"));

var _websocketReducer = _interopRequireDefault(require("./websocket-reducer"));

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

var _default = function _default(config) {
  if (config === void 0) {
    config = _defaultConfig["default"];
  }

  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    var _queriesReducer = (0, _queriesReducer2["default"])({
      queries: state.queries,
      normalizedData: state.normalizedData
    }, action, config),
        queries = _queriesReducer.queries,
        normalizedData = _queriesReducer.normalizedData;

    var _state = state,
        mutations = _state.mutations;

    if (config.isRequestAction(action) && !config.isRequestActionQuery(action) || (0, _actions.isResponseAction)(action) && !config.isRequestActionQuery((0, _actions.getRequestActionFromResponse)(action))) {
      mutations = (0, _mutationsReducer["default"])(mutations, action);
    }

    return (0, _extends2["default"])({}, (0, _requestsKeysReducer["default"])((0, _extends2["default"])({}, (0, _requestsResetReducer["default"])((0, _extends2["default"])({
      queries: queries,
      mutations: mutations,
      cache: (0, _cacheReducer["default"])(state.cache, action)
    }, (0, _progressReducer["default"])({
      downloadProgress: state.downloadProgress,
      uploadProgress: state.uploadProgress
    }, action, config)), action), {
      requestsKeys: state.requestsKeys
    }), action, config), {
      normalizedData: normalizedData,
      ssr: config.ssr ? (0, _ssrReducer["default"])(state.ssr, action, config) : null,
      watchers: (0, _watchersReducer["default"])(state.watchers, action, config),
      websocket: (0, _websocketReducer["default"])(state.websocket, action, config)
    });
  };
};

exports["default"] = _default;