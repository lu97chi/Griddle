"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _griddleConnect = require("../../../utils/griddleConnect");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _mapProps = _interopRequireDefault(require("recompose/mapProps"));

var _getContext = _interopRequireDefault(require("recompose/getContext"));

var _localSelectors = require("../selectors/localSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ComposedContainerComponent = function ComposedContainerComponent(OriginalComponent) {
  return (0, _compose.default)((0, _getContext.default)({
    components: _propTypes.default.object
  }), (0, _griddleConnect.connect)(function (state) {
    return {
      columnTitles: (0, _localSelectors.columnTitlesSelector)(state),
      columnIds: (0, _localSelectors.columnIdsSelector)(state),
      className: (0, _localSelectors.classNamesForComponentSelector)(state, 'TableHeading'),
      style: (0, _localSelectors.stylesForComponentSelector)(state, 'TableHeading')
    };
  }), (0, _mapProps.default)(function (props) {
    return _objectSpread({
      TableHeadingCell: props.components.TableHeadingCell
    }, props);
  }) // withHandlers({ 
  //   TableHeadingCell: props => props.components.TableHeadingCell
  // })
  )(function (_ref) {
    var TableHeadingCell = _ref.TableHeadingCell,
        columnTitles = _ref.columnTitles,
        columnIds = _ref.columnIds,
        className = _ref.className,
        style = _ref.style;
    return _react.default.createElement(OriginalComponent, {
      columnTitles: columnTitles,
      columnIds: columnIds,
      TableHeadingCell: TableHeadingCell,
      className: className,
      style: style
    });
  });
};

var _default = ComposedContainerComponent;
exports.default = _default;