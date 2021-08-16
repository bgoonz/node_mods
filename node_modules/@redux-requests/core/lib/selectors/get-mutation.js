"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _reselect = require("reselect");

var defaultMutation = {
  loading: false,
  pending: 0,
  error: null,
  downloadProgress: null,
  uploadProgress: null
};

var getMutationState = function getMutationState(state, type, requestKey) {
  if (requestKey === void 0) {
    requestKey = '';
  }

  return state.requests.mutations[type + requestKey];
};

var mutationSelectors = new WeakMap();

var createMutationSelector = function createMutationSelector(type, requestKey) {
  return (0, _reselect.createSelector)(function (state) {
    return getMutationState(state, type, requestKey);
  }, function (state) {
    var _state$requests$downl;

    return (_state$requests$downl = state.requests.downloadProgress[type + (requestKey || '')]) != null ? _state$requests$downl : null;
  }, function (state) {
    var _state$requests$uploa;

    return (_state$requests$uploa = state.requests.uploadProgress[type + (requestKey || '')]) != null ? _state$requests$uploa : null;
  }, function (mutationState, downloadProgress, uploadProgress) {
    return {
      pending: mutationState.pending,
      loading: mutationState.pending > 0,
      error: mutationState.error,
      downloadProgress: downloadProgress,
      uploadProgress: uploadProgress
    };
  });
};

var _default = function _default(state, _ref) {
  var type = _ref.type,
      requestKey = _ref.requestKey;
  var mutationState = getMutationState(state, type, requestKey);

  if (!mutationState) {
    return defaultMutation;
  }

  if (!mutationSelectors.get(mutationState.ref)) {
    mutationSelectors.set(mutationState.ref, createMutationSelector(type, requestKey));
  }

  return mutationSelectors.get(mutationState.ref)(state);
};

exports["default"] = _default;