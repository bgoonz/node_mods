"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends6 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _constants = require("../constants");

var _default = function _default(state, action, config) {
  var _action$meta, _action$meta3;

  if (action.type === _constants.SET_DOWNLOAD_PROGRESS) {
    var _extends2;

    return (0, _extends6["default"])({}, state, {
      downloadProgress: (0, _extends6["default"])({}, state.downloadProgress, (_extends2 = {}, _extends2[action.requestType] = action.progress, _extends2))
    });
  }

  if (action.type === _constants.SET_UPLOAD_PROGRESS) {
    var _extends3;

    return (0, _extends6["default"])({}, state, {
      uploadProgress: (0, _extends6["default"])({}, state.uploadProgress, (_extends3 = {}, _extends3[action.requestType] = action.progress, _extends3))
    });
  }

  if (config.isRequestAction(action) && (_action$meta = action.meta) != null && _action$meta.measureDownloadProgress) {
    var _action$meta2, _extends4;

    return (0, _extends6["default"])({}, state, {
      downloadProgress: (0, _extends6["default"])({}, state.downloadProgress, (_extends4 = {}, _extends4[action.type + (((_action$meta2 = action.meta) == null ? void 0 : _action$meta2.requestKey) || '')] = 0, _extends4))
    });
  }

  if (config.isRequestAction(action) && (_action$meta3 = action.meta) != null && _action$meta3.measureUploadProgress) {
    var _action$meta4, _extends5;

    return (0, _extends6["default"])({}, state, {
      uploadProgress: (0, _extends6["default"])({}, state.uploadProgress, (_extends5 = {}, _extends5[action.type + (((_action$meta4 = action.meta) == null ? void 0 : _action$meta4.requestKey) || '')] = 0, _extends5))
    });
  }

  return state;
};

exports["default"] = _default;