import _extends from "@babel/runtime/helpers/extends";
import defaultConfig from '../default-config';
import { STOP_POLLING, RESET_REQUESTS } from '../constants';

var getIntervalKey = function getIntervalKey(action) {
  var _action$meta;

  return action.type + (((_action$meta = action.meta) == null ? void 0 : _action$meta.requestKey) || '');
};

var getKeys = function getKeys(requests) {
  return requests.map(function (v) {
    return typeof v === 'object' ? v.requestType.toString() + (v.requestKey || '') : v.toString();
  });
};

export default (function (config) {
  if (config === void 0) {
    config = defaultConfig;
  }

  var intervals = {};
  return function (store) {
    return function (next) {
      return function (action) {
        var _action$meta2, _action$meta3;

        if (action.type === STOP_POLLING || action.type === RESET_REQUESTS) {
          if (!action.requests) {
            Object.values(intervals).forEach(clearInterval);
            intervals = {};
          } else {
            var keys = getKeys(action.requests);

            var intervalsCopy = _extends({}, intervals);

            keys.forEach(function (k) {
              clearInterval(intervalsCopy[k]);
              delete intervalsCopy[k];
            });
            intervals = intervalsCopy;
          }
        } else if (config.isRequestAction(action) && config.isRequestActionQuery(action) && !((_action$meta2 = action.meta) != null && _action$meta2.polled) && intervals[getIntervalKey(action)]) {
          var _intervalsCopy = _extends({}, intervals);

          clearInterval(intervals[getIntervalKey(action)]);
          delete _intervalsCopy[getIntervalKey(action)];
          intervals = _intervalsCopy;
        }

        if (config.isRequestAction(action) && config.isRequestActionQuery(action) && (_action$meta3 = action.meta) != null && _action$meta3.poll && !action.meta.polled) {
          intervals[getIntervalKey(action)] = setInterval(function () {
            store.dispatch(_extends({}, action, {
              meta: _extends({}, action.meta, {
                polled: true
              })
            }));
          }, action.meta.poll * 1000);
        }

        return next(action);
      };
    };
  };
});