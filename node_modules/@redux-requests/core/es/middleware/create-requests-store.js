import _extends from "@babel/runtime/helpers/extends";
export default (function (store) {
  return _extends({}, store, {
    dispatchRequest: store.dispatch
  });
});