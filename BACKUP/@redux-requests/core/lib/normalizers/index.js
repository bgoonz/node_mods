"use strict";

exports.__esModule = true;
exports.getDependentKeys = exports.mergeData = exports.updateNormalizedData = exports.denormalize = exports.normalize = void 0;

var _normalize = require("./normalize");

exports.normalize = _normalize.normalize;

var _denormalize = require("./denormalize");

exports.denormalize = _denormalize.denormalize;

var _updateNormalizedData = require("./update-normalized-data");

exports.updateNormalizedData = _updateNormalizedData.updateNormalizedData;

var _mergeData = require("./merge-data");

exports.mergeData = _mergeData.mergeData;

var _getDependentKeys = require("./get-dependent-keys");

exports.getDependentKeys = _getDependentKeys.getDependentKeys;