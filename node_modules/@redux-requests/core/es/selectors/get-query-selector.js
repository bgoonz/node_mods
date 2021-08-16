import getQuery from './get-query';
export default (function (props) {
  return function (state) {
    return getQuery(state, props);
  };
});