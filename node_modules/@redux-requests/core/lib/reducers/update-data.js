"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _actions = require("../actions");

var getDataUpdater = function getDataUpdater(mutationConfig) {
  if (typeof mutationConfig === 'function') {
    return mutationConfig;
  } else if (mutationConfig.updateData) {
    return mutationConfig.updateData;
  }

  return null;
};

var _default = function _default(data, action, mutationConfig) {
  if ((0, _actions.isResponseAction)(action)) {
    if ((0, _actions.isSuccessAction)(action)) {
      var dataUpdater = getDataUpdater(mutationConfig);
      return dataUpdater ? dataUpdater(data, action.payload ? action.payload.data : action.response.data) : data;
    } // error or abort case


    return mutationConfig.revertData ? mutationConfig.revertData(data) : data;
  }

  if (mutationConfig.updateDataOptimistic) {
    return mutationConfig.updateDataOptimistic(data);
  }

  if (mutationConfig.local) {
    return getDataUpdater(mutationConfig)(data);
  }

  return data;
};

exports["default"] = _default;