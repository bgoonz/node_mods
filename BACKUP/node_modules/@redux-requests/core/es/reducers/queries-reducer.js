import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/extends";

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

import defaultConfig from '../default-config';
import { success, error, abort, isResponseAction, getRequestActionFromResponse, isErrorAction, isSuccessAction } from '../actions';
import { getQuery } from '../selectors';
import { normalize, mergeData } from '../normalizers';
import updateData from './update-data';

var getInitialQuery = function getInitialQuery(normalized) {
  return {
    data: null,
    pending: 0,
    error: null,
    pristine: true,
    ref: {},
    normalized: normalized,
    usedKeys: normalized ? {} : null
  };
};

var getDataFromResponseAction = function getDataFromResponseAction(action) {
  return action.payload ? action.payload.data : action.response.data;
};

var shouldBeNormalized = function shouldBeNormalized(action, config) {
  var _action$meta;

  return ((_action$meta = action.meta) == null ? void 0 : _action$meta.normalize) !== undefined ? action.meta.normalize : config.normalize;
};

var queryReducer = function queryReducer(state, action, actionType, config, normalizedData) {
  var _action$meta2, _action$meta2$mutatio, _action$meta3, _action$meta4, _action$meta5, _action$meta6, _action$meta7, _action$meta8;

  if (state === undefined) {
    state = getInitialQuery(shouldBeNormalized(action, config));
  }

  if ((_action$meta2 = action.meta) != null && (_action$meta2$mutatio = _action$meta2.mutations) != null && _action$meta2$mutatio[actionType]) {
    var _queries;

    var mutationConfig = action.meta.mutations[actionType];
    var data = updateData(state.normalized ? getQuery({
      requests: {
        normalizedData: normalizedData,
        queries: (_queries = {}, _queries[actionType] = state, _queries),
        downloadProgress: {},
        uploadProgress: {}
      }
    }, {
      type: actionType
    }).data : state.data, action, mutationConfig);
    return data === state.data ? state : _extends({}, state, {
      data: data
    });
  }

  switch (action.type) {
    case success(actionType):
      return (_action$meta3 = action.meta) != null && _action$meta3.ssrResponse || (_action$meta4 = action.meta) != null && _action$meta4.cacheResponse ? state : _extends({}, state, {
        data: getDataFromResponseAction(action),
        pending: state.pending - 1,
        error: null
      });

    case error(actionType):
      return (_action$meta5 = action.meta) != null && _action$meta5.ssrError ? state : _extends({}, state, {
        data: null,
        pending: state.pending - 1,
        error: action.payload ? action.payload : action.error
      });

    case abort(actionType):
      {
        if (state.pending === 1 && state.data === null && state.error === null) {
          return undefined;
        }

        return _extends({}, state, {
          pending: state.pending - 1
        });
      }

    default:
      return (_action$meta6 = action.meta) != null && _action$meta6.ssrResponse || (_action$meta7 = action.meta) != null && _action$meta7.ssrError || (_action$meta8 = action.meta) != null && _action$meta8.cacheResponse ? state : _extends({}, state, {
        pending: state.pending + 1,
        error: null,
        pristine: false
      });
  }
};

var maybeGetQueryActionType = function maybeGetQueryActionType(action, config) {
  if (config.isRequestAction(action) && config.isRequestActionQuery(action)) {
    return action.type;
  }

  if (isResponseAction(action) && config.isRequestActionQuery(getRequestActionFromResponse(action))) {
    return getRequestActionFromResponse(action).type;
  }

  return null;
};

var updateNormalizedData = function updateNormalizedData(normalizedData, action, config) {
  var _action$meta9, _action$meta10;

  if (config.isRequestAction(action) && (_action$meta9 = action.meta) != null && _action$meta9.optimisticData) {
    var _normalize = normalize(action.meta.optimisticData, config),
        newNormalizedData = _normalize[1];

    return mergeData(normalizedData, newNormalizedData);
  }

  if (isResponseAction(action) && isErrorAction(action) && action.meta.revertedData) {
    var _normalize2 = normalize(action.meta.revertedData, config),
        _newNormalizedData = _normalize2[1];

    return mergeData(normalizedData, _newNormalizedData);
  }

  if (isResponseAction(action) && isSuccessAction(action) && shouldBeNormalized(action, config) && !config.isRequestActionQuery(getRequestActionFromResponse(action))) {
    var _normalize3 = normalize(getDataFromResponseAction(action), config),
        _newNormalizedData2 = _normalize3[1];

    return mergeData(normalizedData, _newNormalizedData2);
  }

  if ((_action$meta10 = action.meta) != null && _action$meta10.localData) {
    var _normalize4 = normalize(action.meta.localData, config),
        _newNormalizedData3 = _normalize4[1];

    return mergeData(normalizedData, _newNormalizedData3);
  }

  return normalizedData;
};

export default (function (state, action, config) {
  var _action$meta11;

  if (config === void 0) {
    config = defaultConfig;
  }

  var normalizedData = updateNormalizedData(state.normalizedData, action, config);

  if ((_action$meta11 = action.meta) != null && _action$meta11.mutations) {
    return {
      queries: _extends({}, state.queries, Object.keys(action.meta.mutations).filter(function (actionType) {
        return !!state.queries[actionType];
      }).reduce(function (prev, actionType) {
        var updatedQuery = queryReducer(state.queries[actionType], action, actionType, config, normalizedData);

        if (updatedQuery.normalized && updatedQuery.data !== state.queries[actionType].data) {
          var _normalize5 = normalize(updatedQuery.data, config),
              newdata = _normalize5[0],
              newNormalizedData = _normalize5[1],
              usedKeys = _normalize5[2];

          normalizedData = mergeData(normalizedData, newNormalizedData);
          prev[actionType] = _extends({}, updatedQuery, {
            data: newdata,
            usedKeys: usedKeys
          });
        } else {
          prev[actionType] = updatedQuery;
        }

        return prev;
      }, {})),
      normalizedData: normalizedData
    };
  }

  var queryActionType = maybeGetQueryActionType(action, config);

  if (queryActionType) {
    var _action$meta12, _extends3;

    var queryType = ((_action$meta12 = action.meta) == null ? void 0 : _action$meta12.requestKey) !== undefined ? queryActionType + action.meta.requestKey : queryActionType;
    var updatedQuery = queryReducer(state.queries[queryType], action, queryActionType, config);

    if (updatedQuery === undefined) {
      // eslint-disable-next-line no-unused-vars
      var _state$queries = state.queries,
          toRemove = _state$queries[queryType],
          remainingQueries = _objectWithoutPropertiesLoose(_state$queries, [queryType].map(_toPropertyKey));

      return {
        queries: remainingQueries,
        normalizedData: normalizedData
      };
    }

    if (updatedQuery.normalized && updatedQuery.data && (!state.queries[queryType] || state.queries[queryType].data !== updatedQuery.data)) {
      var _extends2;

      var _normalize6 = normalize(updatedQuery.data, config),
          data = _normalize6[0],
          newNormalizedData = _normalize6[1],
          usedKeys = _normalize6[2];

      return {
        queries: _extends({}, state.queries, (_extends2 = {}, _extends2[queryType] = _extends({}, updatedQuery, {
          data: data,
          usedKeys: usedKeys
        }), _extends2)),
        normalizedData: mergeData(normalizedData, newNormalizedData)
      };
    }

    return {
      queries: _extends({}, state.queries, (_extends3 = {}, _extends3[queryType] = updatedQuery, _extends3)),
      normalizedData: normalizedData
    };
  }

  return state.normalizedData === normalizedData ? state : _extends({}, state, {
    normalizedData: normalizedData
  });
});