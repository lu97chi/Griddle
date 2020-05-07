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

var _valueUtils = require("../utils/valueUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ComposedRowContainer = function ComposedRowContainer(OriginalComponent) {
  return (0, _compose.default)((0, _getContext.default)({
    components: _propTypes.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      columnIds: (0, _dataSelectors.columnIdsSelector)(state),
      rowProperties: (0, _dataSelectors.rowPropertiesSelector)(state),
      rowData: (0, _dataSelectors.rowDataSelector)(state, props),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Row'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Row')
    };
  }), (0, _mapProps.default)(function (props) {
    var components = props.components,
        rowProperties = props.rowProperties,
        className = props.className,
        otherProps = _objectWithoutProperties(props, ["components", "rowProperties", "className"]);

    return _objectSpread({
      Cell: components.Cell,
      className: (0, _valueUtils.valueOrResult)(rowProperties.cssClassName, props) || props.className
    }, otherProps);
  }))(function (props) {
    return _react.default.createElement(OriginalComponent, props);
  });
};

var _default = ComposedRowContainer;
exports.default = _default;