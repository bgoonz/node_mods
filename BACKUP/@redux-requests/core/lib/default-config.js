"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _actions = require("./actions");

var _default = {
  driver: null,
  onRequest: null,
  onSuccess: null,
  onError: null,
  onAbort: null,
  cache: false,
  ssr: null,
  disableRequestsPromise: false,
  isRequestAction: _actions.isRequestAction,
  isRequestActionQuery: _actions.isRequestActionQuery,
  takeLatest: _actions.isRequestActionQuery,
  normalize: false,
  getNormalisationObjectKey: function getNormalisationObjectKey(obj) {
    return obj.id;
  },
  shouldObjectBeNormalized: function shouldObjectBeNormalized(obj) {
    return obj.id !== undefined;
  },
  subscriber: null
};
exports["default"] = _default;