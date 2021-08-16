import _extends from "@babel/runtime/helpers/extends";
import { requestsReducer } from './reducers';
import { createRequestsCacheMiddleware, createClientSsrMiddleware, createServerSsrMiddleware, createSendRequestsMiddleware, createPollingMiddleware, createSubscriptionsMiddleware } from './middleware';
import defaultConfig from './default-config';

var defer = function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};

var handleRequests = function handleRequests(userConfig) {
  var config = _extends({}, defaultConfig, userConfig);

  var requestsPromise = config.ssr === 'server' && !config.disableRequestsPromise ? defer() : null;
  return {
    requestsReducer: requestsReducer(config),
    requestsMiddleware: [config.ssr !== 'server' && config.subscriber && createSubscriptionsMiddleware(config), config.ssr !== 'server' && createPollingMiddleware(config), config.ssr === 'server' && !config.disableRequestsPromise && createServerSsrMiddleware(requestsPromise, config), config.ssr === 'client' && createClientSsrMiddleware(config), config.cache && createRequestsCacheMiddleware(config), createSendRequestsMiddleware(config)].filter(Boolean),
    requestsPromise: requestsPromise
  };
};

export default handleRequests;