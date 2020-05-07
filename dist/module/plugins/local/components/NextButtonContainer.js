"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _griddleConnect = require("../../../utils/griddleConnect");

var _localSelectors = require("../selectors/localSelectors");

var _actions = require("../../../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var enhance = function enhance(OriginalComponent) {
  return (0, _griddleConnect.connect)(function (state) {
    return {
      text: (0, _localSelectors.textSelector)(state, {
        key: 'next'
      }),
      hasNext: (0, _localSelectors.hasNextSelector)(state),
      className: (0, _localSelectors.classNamesForComponentSelector)(state, 'NextButton'),
      style: (0, _localSelectors.stylesForComponentSelector)(state, 'NextButton')
    };
  }, {
    getNext: _actions.getNext
  })(function (props) {
    return _react.default.createElement(OriginalComponent, _extends({}, props, {
      onClick: props.getNext
    }));
  });
};

var _default = enhance;
exports.default = _default;