"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is a component that wraps all of the other settings components ( SettingsToggle, Settings, etc).
// All of the settings views will be hiddne if isEnabled = false
var SettingsWrapper = function SettingsWrapper(_ref) {
  var SettingsToggle = _ref.SettingsToggle,
      Settings = _ref.Settings,
      isEnabled = _ref.isEnabled,
      isVisible = _ref.isVisible,
      style = _ref.style,
      className = _ref.className;
  return isEnabled ? _react.default.createElement("div", {
    style: style,
    className: className
  }, SettingsToggle && _react.default.createElement(SettingsToggle, null), isVisible && _react.default.createElement(Settings, null)) : null;
};

var _default = SettingsWrapper;
exports.default = _default;