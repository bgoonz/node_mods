import defaultConfig from '../default-config';
import { isResponseAction, isSuccessAction } from '../actions';
export default (function (requestsPromise, config) {
  if (config === void 0) {
    config = defaultConfig;
  }

  var index = 0;
  var successActions = [];
  var errorActions = [];
  return function () {
    return function (next) {
      return function (action) {
        if (config.isRequestAction(action)) {
          var _action$meta;

          index += ((_action$meta = action.meta) == null ? void 0 : _action$meta.dependentRequestsNumber) !== undefined ? action.meta.dependentRequestsNumber + 1 : 1;
        } else if (isResponseAction(action)) {
          action = next(action);

          if (!isSuccessAction(action)) {
            errorActions.push(action);
            index -= action.meta.dependentRequestsNumber !== undefined ? action.meta.dependentRequestsNumber + 1 : 1;
            index -= action.meta.isDependentRequest ? 1 : 0;
          } else {
            successActions.push(action);
            index -= action.meta.isDependentRequest ? 2 : 1;
          }

          if (index === 0) {
            if (errorActions.length > 0) {
              requestsPromise.reject({
                successActions: successActions,
                errorActions: errorActions
              });
            } else {
              requestsPromise.resolve(successActions);
            }
          }

          return action;
        }

        return next(action);
      };
    };
  };
});