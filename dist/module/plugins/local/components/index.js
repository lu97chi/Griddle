"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TableBodyContainer = _interopRequireDefault(require("./TableBodyContainer"));

var _RowContainer = _interopRequireDefault(require("./RowContainer"));

var _NextButtonContainer = _interopRequireDefault(require("./NextButtonContainer"));

var _PreviousButtonContainer = _interopRequireDefault(require("./PreviousButtonContainer"));

var _PageDropdownContainer = _interopRequireDefault(require("./PageDropdownContainer"));

var _TableContainer = _interopRequireDefault(require("./TableContainer"));

var _TableHeadingCellContainer = _interopRequireDefault(require("./TableHeadingCellContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  TableBodyContainer: _TableBodyContainer.default,
  RowContainer: _RowContainer.default,
  NextButtonContainer: _NextButtonContainer.default,
  PreviousButtonContainer: _PreviousButtonContainer.default,
  PageDropdownContainer: _PageDropdownContainer.default,
  TableContainer: _TableContainer.default,
  TableHeadingCellContainer: _TableHeadingCellContainer.default // TODO: Obsolete; remove

};
exports.default = _default;