"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _griddleConnect = require("../utils/griddleConnect");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _mapProps = _interopRequireDefault(require("recompose/mapProps"));

var _getContext = _interopRequireDefault(require("recompose/getContext"));

var _dataSelectors = require("../selectors/dataSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _griddleConnect.connect)(function (state, props) {
  return {
    maxPages: (0, _dataSelectors.maxPageSelector)(state, props),
    currentPage: (0, _dataSelectors.currentPageSelector)(state, props),
    className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'PageDropdown'),
    style: (0, _dataSelectors.stylesForComponentSelector)(state, 'PageDropdown')
  };
});
var _default = enhance;
exports.default = _default;