"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function TableBody(_ref) {
  var rowIds = _ref.rowIds,
      Row = _ref.Row,
      style = _ref.style,
      className = _ref.className;
  return _react.default.createElement("tbody", {
    style: style,
    className: className
  }, rowIds && rowIds.map(function (k, i) {
    return _react.default.createElement(Row, {
      key: k,
      griddleKey: k,
      index: i
    });
  }));
};

var _default = TableBody;
exports.default = _default;