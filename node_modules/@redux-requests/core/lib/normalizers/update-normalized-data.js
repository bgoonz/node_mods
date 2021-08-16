"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.updateNormalizedData = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defaultConfig = _interopRequireDefault(require("../default-config"));

var _normalize2 = require("./normalize");

var _mergeData = require("./merge-data");

var updateNormalizedData = function updateNormalizedData(mutation, normalizedData, config) {
  if (config === void 0) {
    config = _defaultConfig["default"];
  }

  var _normalize = (0, _normalize2.normalize)(mutation, config),
      dataToMerge = _normalize[1];

  if (Object.keys(dataToMerge).length > 0) {
    var normalizedDataCopy = (0, _extends2["default"])({}, normalizedData);
    Object.entries(dataToMerge).forEach(function (_ref) {
      var k = _ref[0],
          v = _ref[1];

      if (normalizedDataCopy[k]) {
        normalizedDataCopy[k] = (0, _mergeData.mergeData)(normalizedDataCopy[k], v);
      } else {
        normalizedDataCopy[k] = v;
      }
    });
    return normalizedDataCopy;
  }

  return normalizedData;
};

exports.updateNormalizedData = updateNormalizedData;