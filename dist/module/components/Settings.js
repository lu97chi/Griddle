"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is responsible for rendering the individual settings sections
var Settings = function Settings(_ref) {
  var settingsComponents = _ref.settingsComponents,
      style = _ref.style,
      className = _ref.className;
  return _react.default.createElement("div", {
    style: style,
    className: className
  }, settingsComponents && settingsComponents.map(function (SettingsComponent, i) {
    return SettingsComponent && _react.default.createElement("div", {
      key: SettingsComponent.key || i
    }, _react.default.createElement(SettingsComponent, null));
  }));
};

var _default = Settings;
exports.default = _default;