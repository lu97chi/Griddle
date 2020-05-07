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

var _withHandlers = _interopRequireDefault(require("recompose/withHandlers"));

var _dataSelectors = require("../selectors/dataSelectors");

var _actions = require("../actions");

var _compositionUtils = require("../utils/compositionUtils");

var _sortUtils = require("../utils/sortUtils");

var _valueUtils = require("../utils/valueUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DefaultTableHeadingCellContent = function DefaultTableHeadingCellContent(_ref) {
  var title = _ref.title,
      icon = _ref.icon,
      iconClassName = _ref.iconClassName;
  return _react.default.createElement("span", null, title, icon && _react.default.createElement("span", {
    className: iconClassName
  }, icon));
};

var EnhancedHeadingCell = function EnhancedHeadingCell(OriginalComponent) {
  return (0, _compose.default)((0, _getContext.default)({
    events: _propTypes.default.object,
    selectors: _propTypes.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    return _objectSpread({
      sortProperty: (0, _dataSelectors.sortPropertyByIdSelector)(state, props),
      customHeadingComponent: (0, _dataSelectors.customHeadingComponentSelector)(state, props),
      cellProperties: (0, _dataSelectors.cellPropertiesSelector)(state, props),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'TableHeadingCell'),
      sortAscendingClassName: (0, _dataSelectors.classNamesForComponentSelector)(state, 'TableHeadingCellAscending'),
      sortDescendingClassName: (0, _dataSelectors.classNamesForComponentSelector)(state, 'TableHeadingCellDescending'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'TableHeadingCell')
    }, (0, _dataSelectors.iconsForComponentSelector)(state, 'TableHeadingCell'));
  }, function (dispatch, _ref2) {
    var onSort = _ref2.events.onSort;
    return {
      setSortColumn: (0, _compositionUtils.combineHandlers)([onSort, (0, _compose.default)(dispatch, _actions.setSortColumn)])
    };
  }), (0, _withHandlers.default)(function (props) {
    return {
      onClick: props.cellProperties.sortable === false ? function () {
        return function () {};
      } : props.events.setSortProperties || _sortUtils.setSortProperties
    };
  }), //TODO: use with props on change or something more performant here
  (0, _mapProps.default)(function (props) {
    var iconProps = (0, _sortUtils.getSortIconProps)(props);
    var title = props.customHeadingComponent ? _react.default.createElement(props.customHeadingComponent, _extends({}, props.cellProperties.extraData, props, iconProps)) : _react.default.createElement(DefaultTableHeadingCellContent, _extends({
      title: props.title
    }, iconProps));
    var className = (0, _valueUtils.valueOrResult)(props.cellProperties.headerCssClassName, props) || props.className;

    var style = _objectSpread({}, props.cellProperties.sortable === false || {
      cursor: 'pointer'
    }, props.style);

    return _objectSpread({}, props.cellProperties.extraData, props, iconProps, {
      title: title,
      style: style,
      className: className
    });
  }))(function (props) {
    return _react.default.createElement(OriginalComponent, props);
  });
};

var _default = EnhancedHeadingCell;
exports.default = _default;