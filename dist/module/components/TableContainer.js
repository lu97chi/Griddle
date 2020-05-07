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

var ComposedContainerComponent = function ComposedContainerComponent(OriginalComponent) {
  return (0, _compose.default)((0, _getContext.default)({
    components: _propTypes.default.object
  }), //TODO: Should we use withHandlers here instead? I realize that's not 100% the intent of that method
  (0, _mapProps.default)(function (props) {
    return {
      TableHeading: props.components.TableHeading,
      TableBody: props.components.TableBody,
      Loading: props.components.Loading,
      NoResults: props.components.NoResults
    };
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      dataLoading: (0, _dataSelectors.dataLoadingSelector)(state),
      visibleRows: (0, _dataSelectors.visibleRowCountSelector)(state),
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Table'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Table')
    };
  }))(function (props) {
    return _react.default.createElement(OriginalComponent, props);
  });
};

var _default = ComposedContainerComponent;
exports.default = _default;