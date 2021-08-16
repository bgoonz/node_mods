import _extends from "@babel/runtime/helpers/extends";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { createSelectorCreator, defaultMemoize } from 'reselect';
import { denormalize, getDependentKeys } from '../normalizers';

var isQueryEqual = function isQueryEqual(currentVal, previousVal) {
  if (currentVal.data !== previousVal.data || currentVal.pending !== previousVal.pending || currentVal.error !== previousVal.error || currentVal.pristine !== previousVal.pristine || currentVal.downloadProgress !== previousVal.downloadProgress || currentVal.uploadProgress !== previousVal.uploadProgress) {
    return false;
  }

  if (currentVal.data === null && (currentVal.multiple !== previousVal.multiple || currentVal.defaultData !== previousVal.defaultData)) {
    return false;
  }

  if (currentVal.normalized && currentVal.normalizedData !== previousVal.normalizedData) {
    var currentDependencies = getDependentKeys(currentVal.data, currentVal.normalizedData, currentVal.usedKeys);
    var previousDependencies = getDependentKeys(previousVal.data, previousVal.normalizedData, previousVal.usedKeys);

    if (currentDependencies.size !== previousDependencies.size) {
      return false;
    }

    for (var _iterator = _createForOfIteratorHelperLoose(currentDependencies), _step; !(_step = _iterator()).done;) {
      var k = _step.value;

      if (!previousDependencies.has(k) || currentVal.normalizedData[k] !== previousVal.normalizedData[k]) {
        return false;
      }
    }
  }

  return true;
};

var createCustomSelector = createSelectorCreator(defaultMemoize, isQueryEqual);

var getData = function getData(data, multiple, defaultData) {
  if (data !== null) {
    return data;
  }

  if (defaultData !== undefined) {
    return defaultData;
  }

  if (multiple) {
    return [];
  }

  return data;
};

var getQueryState = function getQueryState(state, type, requestKey) {
  if (requestKey === void 0) {
    requestKey = '';
  }

  return state.requests.queries[type + requestKey];
};

var createQuerySelector = function createQuerySelector(type, requestKey) {
  return createCustomSelector(function (state, defaultData, multiple) {
    var _state$requests$downl, _state$requests$uploa;

    // in order not to keep queryState.ref reference in selector memoize
    var _getQueryState = getQueryState(state, type, requestKey),
        data = _getQueryState.data,
        pending = _getQueryState.pending,
        error = _getQueryState.error,
        pristine = _getQueryState.pristine,
        normalized = _getQueryState.normalized,
        usedKeys = _getQueryState.usedKeys;

    return {
      data: data,
      pending: pending,
      error: error,
      pristine: pristine,
      normalized: normalized,
      usedKeys: usedKeys,
      multiple: multiple,
      defaultData: defaultData,
      normalizedData: state.requests.normalizedData,
      downloadProgress: (_state$requests$downl = state.requests.downloadProgress[type + (requestKey || '')]) != null ? _state$requests$downl : null,
      uploadProgress: (_state$requests$uploa = state.requests.uploadProgress[type + (requestKey || '')]) != null ? _state$requests$uploa : null
    };
  }, function (_ref) {
    var data = _ref.data,
        pending = _ref.pending,
        error = _ref.error,
        pristine = _ref.pristine,
        usedKeys = _ref.usedKeys,
        normalized = _ref.normalized,
        normalizedData = _ref.normalizedData,
        defaultData = _ref.defaultData,
        multiple = _ref.multiple,
        downloadProgress = _ref.downloadProgress,
        uploadProgress = _ref.uploadProgress;
    return {
      data: normalized ? denormalize(getData(data, multiple, defaultData), normalizedData, usedKeys) : getData(data, multiple, defaultData),
      pending: pending,
      loading: pending > 0,
      error: error,
      pristine: pristine,
      downloadProgress: downloadProgress,
      uploadProgress: uploadProgress
    };
  });
};

var defaultQuery = {
  data: null,
  pending: 0,
  loading: false,
  error: null,
  pristine: true,
  downloadProgress: null,
  uploadProgress: null
};

var defaultQueryMultiple = _extends({}, defaultQuery, {
  data: []
});

var defaultQueriesWithCustomData = new Map();

var getDefaultQuery = function getDefaultQuery(defaultData, multiple) {
  if (defaultData !== undefined && defaultQueriesWithCustomData.get(defaultData)) {
    return defaultQueriesWithCustomData.get(defaultData);
  }

  if (defaultData !== undefined) {
    var query = _extends({}, defaultQuery, {
      data: defaultData
    });

    defaultQueriesWithCustomData.set(defaultData, query);
    return query;
  }

  return multiple ? defaultQueryMultiple : defaultQuery;
};

var querySelectors = new WeakMap();
export default (function (state, _ref2) {
  var type = _ref2.type,
      requestKey = _ref2.requestKey,
      defaultData = _ref2.defaultData,
      _ref2$multiple = _ref2.multiple,
      multiple = _ref2$multiple === void 0 ? false : _ref2$multiple;
  var queryState = getQueryState(state, type, requestKey);

  if (!queryState) {
    return getDefaultQuery(defaultData, multiple);
  }

  if (!querySelectors.get(queryState.ref)) {
    querySelectors.set(queryState.ref, createQuerySelector(type, requestKey));
  }

  return querySelectors.get(queryState.ref)(state, defaultData, multiple);
});