"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoResults = function NoResults(_ref) {
  var className = _ref.className,
      style = _ref.style;
  return _react.default.createElement("div", {
    style: style,
    className: className
  }, "No results found.");
};

var _default = NoResults;
exports.default = _default;