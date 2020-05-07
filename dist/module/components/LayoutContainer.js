"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _griddleConnect = require("../utils/griddleConnect");

var _getContext = _interopRequireDefault(require("recompose/getContext"));

var _mapProps = _interopRequireDefault(require("recompose/mapProps"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _dataSelectors = require("../selectors/dataSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnhancedLayout = function EnhancedLayout(OriginalComponent) {
  return (0, _compose.default)((0, _getContext.default)({
    components: _propTypes.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Layout'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Layout')
    };
  }), (0, _mapProps.default)(function (props) {
    return {
      Table: props.components.Table,
      Pagination: props.components.Pagination,
      Filter: props.components.Filter,
      SettingsWrapper: props.components.SettingsWrapper,
      Style: props.components.Style,
      className: props.className,
      style: props.style
    };
  }))(function (props) {
    return _react.default.createElement(OriginalComponent, props);
  });
};

var _default = EnhancedLayout;
exports.default = _default;