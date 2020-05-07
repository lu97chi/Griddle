"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SettingsToggle = function SettingsToggle(_ref) {
  var onClick = _ref.onClick,
      text = _ref.text,
      style = _ref.style,
      className = _ref.className;
  return _react.default.createElement("button", {
    onClick: onClick,
    type: "button",
    style: style,
    className: className
  }, text);
};

var _default = SettingsToggle;
exports.default = _default;