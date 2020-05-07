"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _griddleConnect = require("../utils/griddleConnect");

var _getContext = _interopRequireDefault(require("recompose/getContext"));

var _mapProps = _interopRequireDefault(require("recompose/mapProps"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _dataSelectors = require("../selectors/dataSelectors");

var _valueUtils = require("../utils/valueUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function hasWidthOrStyles(cellProperties) {
  return cellProperties.hasOwnProperty('width') || cellProperties.hasOwnProperty('styles');
}

function getCellStyles(cellProperties, originalStyles) {
  if (!hasWidthOrStyles(cellProperties)) {
    return originalStyles;
  }

  var styles = originalStyles; // we want to take griddle style object styles, cell specific styles

  if (cellProperties.hasOwnProperty('style')) {
    styles = Object.assign({}, styles, originalStyles, cellProperties.style);
  }

  if (cellProperties.hasOwnProperty('width')) {
    styles = Object.assign({}, styles, {
      width: cellProperties.width
    });
  }

  return styles;
}

var mapStateToProps = function mapStateToProps() {
  var cellPropertiesSelector = (0, _dataSelectors.cellPropertiesSelectorFactory)();
  return function (state, props) {
    return {
      value: (0, _dataSelectors.cellValueSelector)(state, props),
      customComponent: (0, _dataSelectors.customComponentSelector)(state, props),
      cellProperties: cellPropertiesSelector(state, props),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Cell'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Cell')
    };
  };
};

var ComposedCellContainer = function ComposedCellContainer(OriginalComponent) {
  return (0, _compose.default)((0, _griddleConnect.connect)(mapStateToProps), (0, _mapProps.default)(function (props) {
    return _objectSpread({}, props.cellProperties.extraData, props, {
      className: (0, _valueUtils.valueOrResult)(props.cellProperties.cssClassName, props) || props.className,
      style: getCellStyles(props.cellProperties, props.style),
      value: props.customComponent ? _react.default.createElement(props.customComponent, _extends({}, props.cellProperties.extraData, props)) : props.value
    });
  }))(function (props) {
    return _react.default.createElement(OriginalComponent, props);
  });
};

var _default = ComposedCellContainer;
exports.default = _default;