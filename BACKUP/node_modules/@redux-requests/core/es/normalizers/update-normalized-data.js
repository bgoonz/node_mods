import _extends from "@babel/runtime/helpers/extends";
import defaultConfig from '../default-config';
import { normalize } from './normalize';
import { mergeData } from './merge-data';
export var updateNormalizedData = function updateNormalizedData(mutation, normalizedData, config) {
  if (config === void 0) {
    config = defaultConfig;
  }

  var _normalize = normalize(mutation, config),
      dataToMerge = _normalize[1];

  if (Object.keys(dataToMerge).length > 0) {
    var normalizedDataCopy = _extends({}, normalizedData);

    Object.entries(dataToMerge).forEach(function (_ref) {
      var k = _ref[0],
          v = _ref[1];

      if (normalizedDataCopy[k]) {
        normalizedDataCopy[k] = mergeData(normalizedDataCopy[k], v);
      } else {
        normalizedDataCopy[k] = v;
      }
    });
    return normalizedDataCopy;
  }

  return normalizedData;
};