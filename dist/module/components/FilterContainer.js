"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _griddleConnect = require("../utils/griddleConnect");

var _dataSelectors = require("../selectors/dataSelectors");

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnhancedFilter = function EnhancedFilter(OriginalComponent) {
  return (0, _griddleConnect.connect)(function (state, props) {
    return {
      placeholder: (0, _dataSelectors.textSelector)(state, {
        key: 'filterPlaceholder'
      }),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Filter'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Filter')
    };
  }, {
    setFilter: _actions.setFilter
  })(function (props) {
    return _react.default.createElement(OriginalComponent, props);
  });
};

var _default = EnhancedFilter;
exports.default = _default;