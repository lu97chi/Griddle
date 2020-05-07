"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NextButton = function NextButton(_ref) {
  var hasNext = _ref.hasNext,
      onClick = _ref.onClick,
      style = _ref.style,
      className = _ref.className,
      text = _ref.text;
  return hasNext ? _react.default.createElement("button", {
    type: "button",
    onClick: onClick,
    style: style,
    className: className
  }, text) : null;
};

var _default = NextButton;
exports.default = _default;