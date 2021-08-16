export var denormalize = function denormalize(data, normalizedData, usedKeys, path) {
  if (path === void 0) {
    path = '';
  }

  if (typeof data === 'string' && data.startsWith('@@')) {
    return denormalize(normalizedData[data], normalizedData, usedKeys, path);
  }

  if (Array.isArray(data)) {
    return data.map(function (v) {
      return denormalize(v, normalizedData, usedKeys, path);
    });
  }

  if (data !== null && typeof data === 'object') {
    var objectEntries = usedKeys[path] ? Object.entries(data).filter(function (_ref) {
      var k = _ref[0];
      return usedKeys[path].includes(k);
    }) : Object.entries(data);
    return objectEntries.reduce(function (prev, _ref2) {
      var k = _ref2[0],
          v = _ref2[1];
      prev[k] = denormalize(v, normalizedData, usedKeys, path + "." + k);
      return prev;
    }, {});
  }

  return data;
};