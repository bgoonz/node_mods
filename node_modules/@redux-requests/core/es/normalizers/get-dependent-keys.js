export var getDependentKeys = function getDependentKeys(data, normalizedData, usedKeys, dependentKeys, path) {
  if (path === void 0) {
    path = '';
  }

  if (!dependentKeys) {
    dependentKeys = new Set();
  }

  if (typeof data === 'string' && data.startsWith('@@')) {
    dependentKeys.add(data);
    getDependentKeys(normalizedData[data], normalizedData, usedKeys, dependentKeys, path);
  } else if (Array.isArray(data)) {
    data.forEach(function (v) {
      return getDependentKeys(v, normalizedData, usedKeys, dependentKeys, path);
    });
  } else if (data !== null && typeof data === 'object') {
    var objectEntries = usedKeys[path] ? Object.entries(data).filter(function (_ref) {
      var k = _ref[0];
      return usedKeys[path].includes(k);
    }) : Object.entries(data);
    objectEntries.forEach(function (_ref2) {
      var k = _ref2[0],
          v = _ref2[1];
      getDependentKeys(v, normalizedData, usedKeys, dependentKeys, path + "." + k);
    });
  }

  return dependentKeys;
};