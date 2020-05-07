"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(_ref) {
  var Next = _ref.Next,
      Previous = _ref.Previous,
      PageDropdown = _ref.PageDropdown,
      style = _ref.style,
      className = _ref.className;
  return _react.default.createElement("div", {
    style: style,
    className: className
  }, Previous && _react.default.createElement(Previous, null), PageDropdown && _react.default.createElement(PageDropdown, null), Next && _react.default.createElement(Next, null));
};

var _default = Pagination;
exports.default = _default;