import { isRequestActionQuery, isRequestAction } from './actions';
export default {
  driver: null,
  onRequest: null,
  onSuccess: null,
  onError: null,
  onAbort: null,
  cache: false,
  ssr: null,
  disableRequestsPromise: false,
  isRequestAction: isRequestAction,
  isRequestActionQuery: isRequestActionQuery,
  takeLatest: isRequestActionQuery,
  normalize: false,
  getNormalisationObjectKey: function getNormalisationObjectKey(obj) {
    return obj.id;
  },
  shouldObjectBeNormalized: function shouldObjectBeNormalized(obj) {
    return obj.id !== undefined;
  },
  subscriber: null
};