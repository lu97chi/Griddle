"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = function component(_ref) {
  var Table = _ref.Table,
      Pagination = _ref.Pagination,
      Filter = _ref.Filter,
      SettingsWrapper = _ref.SettingsWrapper,
      Style = _ref.Style,
      className = _ref.className,
      style = _ref.style;
  return _react.default.createElement("div", {
    className: className,
    style: style
  }, Style && _react.default.createElement(Style, null), _react.default.createElement(Filter, null), _react.default.createElement(SettingsWrapper, null), _react.default.createElement(Table, null), _react.default.createElement(Pagination, null));
};

var _default = component;
exports.default = _default;