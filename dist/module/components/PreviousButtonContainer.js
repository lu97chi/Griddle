"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _griddleConnect = require("../utils/griddleConnect");

var _dataSelectors = require("../selectors/dataSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = function enhance(OriginalComponent) {
  return (0, _griddleConnect.connect)(function (state, props) {
    return {
      text: (0, _dataSelectors.textSelector)(state, {
        key: 'previous'
      }),
      hasPrevious: (0, _dataSelectors.hasPreviousSelector)(state, props),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'PreviousButton'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'PreviousButton')
    };
  })(function (props) {
    return _react.default.createElement(OriginalComponent, props);
  });
};

var _default = enhance;
exports.default = _default;