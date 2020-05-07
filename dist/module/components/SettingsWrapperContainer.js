"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _griddleConnect = require("../utils/griddleConnect");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _mapProps = _interopRequireDefault(require("recompose/mapProps"));

var _getContext = _interopRequireDefault(require("recompose/getContext"));

var _dataSelectors = require("../selectors/dataSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnhancedSettingsWrapper = function EnhancedSettingsWrapper(OriginalComponent) {
  return (0, _compose.default)((0, _getContext.default)({
    components: _propTypes.default.object
  }), (0, _mapProps.default)(function (props) {
    return {
      Settings: props.components.Settings,
      SettingsToggle: props.components.SettingsToggle
    };
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      isEnabled: (0, _dataSelectors.isSettingsEnabledSelector)(state),
      isVisible: (0, _dataSelectors.isSettingsVisibleSelector)(state),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'SettingsWrapper'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'SettingsWrapper')
    };
  }))(function (props) {
    return _react.default.createElement(OriginalComponent, props);
  });
};

var _default = EnhancedSettingsWrapper;
exports.default = _default;