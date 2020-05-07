"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.components = void 0;

var _PageSizeSettings = _interopRequireDefault(require("./PageSizeSettings"));

var _ColumnChooser = _interopRequireDefault(require("./ColumnChooser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = {
  pageSizeSettings: _PageSizeSettings.default,
  columnChooser: _ColumnChooser.default
};
exports.components = components;
var _default = {
  pageSizeSettings: {
    order: 1
  },
  columnChooser: {
    order: 2
  }
};
exports.default = _default;