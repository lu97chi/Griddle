"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react.default.createElement("div", {
    style: style,
    className: className
  }, "Loading\u2026");
};

var _default = Loading;
exports.default = _default;