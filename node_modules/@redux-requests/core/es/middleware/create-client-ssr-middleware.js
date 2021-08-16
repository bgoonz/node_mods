import _extends from "@babel/runtime/helpers/extends";
import defaultConfig from '../default-config';
import { getQuery } from '../selectors';
export default (function (config) {
  if (config === void 0) {
    config = defaultConfig;
  }

  return function (store) {
    return function (next) {
      return function (action) {
        var _action$meta2;

        if (!config.isRequestAction(action)) {
          return next(action);
        }

        var state = store.getState();
        var actionsToIgnore = state.requests.ssr;
        var actionToIgnore = actionsToIgnore.find(function (v) {
          var _action$meta;

          return (v.requestType || v) === action.type + (((_action$meta = action.meta) == null ? void 0 : _action$meta.requestKey) || '');
        });

        if (!actionToIgnore) {
          return next(action);
        }

        var query = getQuery(state, {
          type: action.type,
          requestKey: (_action$meta2 = action.meta) == null ? void 0 : _action$meta2.requestKey
        });
        action.meta = actionToIgnore.duplicate ? _extends({}, action.meta, {
          ssrDuplicate: true
        }) : action.meta;

        if (query.error) {
          return next(_extends({}, action, {
            meta: _extends({}, action.meta, {
              ssrError: query.error
            })
          }));
        }

        return next(_extends({}, action, {
          meta: _extends({}, action.meta, {
            ssrResponse: {
              data: query.data
            }
          })
        }));
      };
    };
  };
});