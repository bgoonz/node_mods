"use strict";

exports.__esModule = true;
exports.mapObject = exports.mapRequest = void 0;

var mapRequest = function mapRequest(request, callback) {
  return Array.isArray(request) ? request.map(callback) : callback(request);
};

exports.mapRequest = mapRequest;

var mapObject = function mapObject(obj, callback) {
  return Object.entries(obj).reduce(function (prev, _ref) {
    var k = _ref[0],
        v = _ref[1];
    var newValue = callback(k, v);

    if (newValue === undefined) {
      return prev;
    }

    prev[k] = newValue;
    return prev;
  }, {});
};

exports.mapObject = mapObject;