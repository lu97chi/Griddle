"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SpacerRow = _interopRequireDefault(require("./SpacerRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function TableBody(_ref) {
  var rowIds = _ref.rowIds,
      Row = _ref.Row;
  return _react.default.createElement("tbody", null, _react.default.createElement(_SpacerRow.default, {
    placement: "top"
  }), rowIds && rowIds.map(function (r) {
    return _react.default.createElement(Row, {
      key: r,
      griddleKey: r
    });
  }), _react.default.createElement(_SpacerRow.default, {
    placement: "bottom"
  }));
};

var _default = TableBody;
exports.default = _default;