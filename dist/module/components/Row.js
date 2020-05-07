"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var Cell = _ref.Cell,
      griddleKey = _ref.griddleKey,
      columnIds = _ref.columnIds,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      style = _ref.style,
      className = _ref.className;
  return _react.default.createElement("tr", {
    key: griddleKey,
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    style: style,
    className: className
  }, columnIds && columnIds.map(function (c) {
    return _react.default.createElement(Cell, {
      key: "".concat(c, "-").concat(griddleKey),
      griddleKey: griddleKey,
      columnId: c,
      style: style,
      className: className
    });
  }));
};

var _default = Row;
exports.default = _default;