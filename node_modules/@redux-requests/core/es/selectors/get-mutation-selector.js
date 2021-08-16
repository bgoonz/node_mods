import getMutation from './get-mutation';
export default (function (props) {
  return function (state) {
    return getMutation(state, props);
  };
});