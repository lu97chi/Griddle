"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHeading = function TableHeading(_ref) {
  var columnTitles = _ref.columnTitles,
      columnIds = _ref.columnIds,
      TableHeadingCell = _ref.TableHeadingCell,
      style = _ref.style,
      className = _ref.className;
  var headingCells = columnIds && columnTitles && columnTitles.map(function (t, i) {
    return _react.default.createElement(TableHeadingCell, {
      key: columnIds[i],
      title: t,
      columnId: columnIds[i]
    });
  });
  return _react.default.createElement("thead", {
    style: style,
    className: className
  }, _react.default.createElement("tr", null, headingCells));
};

var _default = TableHeading;
exports.default = _default;