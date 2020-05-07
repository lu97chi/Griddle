"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We're not going to be displaying a pagination bar for infinite scrolling.
var PaginationComponent = function PaginationComponent(props) {
  return _react.default.createElement("span", null);
};

var _default = PaginationComponent;
exports.default = _default;