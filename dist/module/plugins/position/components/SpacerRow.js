"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _griddleConnect = require("../../../utils/griddleConnect");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _mapProps = _interopRequireDefault(require("recompose/mapProps"));

var _getContext = _interopRequireDefault(require("recompose/getContext"));

var _withHandlers = _interopRequireDefault(require("recompose/withHandlers"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var spacerRow = (0, _compose.default)((0, _getContext.default)({
  selectors: _propTypes.default.object
}), (0, _griddleConnect.connect)(function (state, props) {
  var _props$selectors = props.selectors,
      topSpacerSelector = _props$selectors.topSpacerSelector,
      bottomSpacerSelector = _props$selectors.bottomSpacerSelector;
  var placement = props.placement;
  return {
    spacerHeight: placement === 'top' ? topSpacerSelector(state, props) : bottomSpacerSelector(state, props)
  };
}), (0, _mapProps.default)(function (props) {
  return {
    placement: props.placement,
    spacerHeight: props.spacerHeight
  };
}))((_temp = _class =
/*#__PURE__*/
function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          placement = _this$props.placement,
          spacerHeight = _this$props.spacerHeight;
      var spacerRowStyle = {
        height: "".concat(spacerHeight, "px")
      };
      return _react.default.createElement("tr", {
        key: placement + '-' + spacerHeight,
        style: spacerRowStyle
      });
    }
  }]);

  return _class;
}(_react.Component), _defineProperty(_class, "propTypes", {
  placement: _propTypes.default.string,
  spacerHeight: _propTypes.default.number
}), _defineProperty(_class, "defaultProps", {
  placement: 'top' // shouldComponentUpdate(nextProps) {
  //   const { currentPosition: oldPosition, placement: oldPlacement } = this.props;
  //   const { currentPosition, placement } = nextProps;
  //
  //   return oldPosition !== currentPosition || oldPlacement !== placement;
  // }

}), _temp));
var _default = spacerRow;
exports.default = _default;