"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHeadingCell = function TableHeadingCell(_ref) {
  var title = _ref.title,
      columnId = _ref.columnId,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      icon = _ref.icon,
      style = _ref.style,
      className = _ref.className;
  return _react.default.createElement("th", {
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    style: style,
    className: className
  }, title);
};

var _default = TableHeadingCell;
exports.default = _default;