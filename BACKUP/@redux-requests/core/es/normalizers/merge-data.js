import deepmerge from 'deepmerge';
var mergeOptions = {
  arrayMerge: function arrayMerge(destinationArray, sourceArray) {
    return sourceArray;
  },
  clone: false
};
export var mergeData = function mergeData(oldData, newData) {
  return deepmerge(oldData, newData, mergeOptions);
};