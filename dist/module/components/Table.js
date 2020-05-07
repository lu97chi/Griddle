"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Table = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(_ref) {
  var TableHeading = _ref.TableHeading,
      TableBody = _ref.TableBody,
      Loading = _ref.Loading,
      NoResults = _ref.NoResults,
      style = _ref.style,
      className = _ref.className,
      dataLoading = _ref.dataLoading,
      visibleRows = _ref.visibleRows;
  return dataLoading ? Loading && _react.default.createElement(Loading, null) : visibleRows > 0 ? _react.default.createElement("table", {
    style: style,
    className: className
  }, TableHeading && _react.default.createElement(TableHeading, null), TableBody && _react.default.createElement(TableBody, null)) : NoResults && _react.default.createElement(NoResults, null);
};

exports.Table = Table;
var _default = Table;
exports.default = _default;