import _extends from "@babel/runtime/helpers/extends";
import { SET_DOWNLOAD_PROGRESS, SET_UPLOAD_PROGRESS } from '../constants';
export default (function (state, action, config) {
  var _action$meta, _action$meta3;

  if (action.type === SET_DOWNLOAD_PROGRESS) {
    var _extends2;

    return _extends({}, state, {
      downloadProgress: _extends({}, state.downloadProgress, (_extends2 = {}, _extends2[action.requestType] = action.progress, _extends2))
    });
  }

  if (action.type === SET_UPLOAD_PROGRESS) {
    var _extends3;

    return _extends({}, state, {
      uploadProgress: _extends({}, state.uploadProgress, (_extends3 = {}, _extends3[action.requestType] = action.progress, _extends3))
    });
  }

  if (config.isRequestAction(action) && (_action$meta = action.meta) != null && _action$meta.measureDownloadProgress) {
    var _action$meta2, _extends4;

    return _extends({}, state, {
      downloadProgress: _extends({}, state.downloadProgress, (_extends4 = {}, _extends4[action.type + (((_action$meta2 = action.meta) == null ? void 0 : _action$meta2.requestKey) || '')] = 0, _extends4))
    });
  }

  if (config.isRequestAction(action) && (_action$meta3 = action.meta) != null && _action$meta3.measureUploadProgress) {
    var _action$meta4, _extends5;

    return _extends({}, state, {
      uploadProgress: _extends({}, state.uploadProgress, (_extends5 = {}, _extends5[action.type + (((_action$meta4 = action.meta) == null ? void 0 : _action$meta4.requestKey) || '')] = 0, _extends5))
    });
  }

  return state;
});