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

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Table = function Table(OriginalComponent) {
  var _temp;

  return (0, _compose.default)((0, _getContext.default)({
    selectors: _propTypes.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    var _props$selectors = props.selectors,
        tableHeightSelector = _props$selectors.tableHeightSelector,
        tableWidthSelector = _props$selectors.tableWidthSelector,
        rowHeightSelector = _props$selectors.rowHeightSelector;
    return {
      TableHeight: tableHeightSelector(state),
      TableWidth: tableWidthSelector(state),
      RowHeight: rowHeightSelector(state)
    };
  }, {
    setScrollPosition: _actions.setScrollPosition
  }), (0, _mapProps.default)(function (props) {
    var selectors = props.selectors,
        restProps = _objectWithoutProperties(props, ["selectors"]);

    return restProps;
  }))((_temp =
  /*#__PURE__*/
  function (_Component) {
    _inherits(_temp, _Component);

    function _temp(props, context) {
      var _this;

      _classCallCheck(this, _temp);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_temp).call(this, props, context));

      _defineProperty(_assertThisInitialized(_this), "_scroll", function () {
        var _this$props = _this.props,
            setScrollPosition = _this$props.setScrollPosition,
            RowHeight = _this$props.RowHeight;
        var scrollTop = _this.state.scrollTop;

        if (_this._scrollable && Math.abs(_this._scrollable.scrollTop - scrollTop) >= RowHeight) {
          setScrollPosition(_this._scrollable.scrollLeft, _this._scrollable.scrollWidth, _this._scrollable.clientWidth, _this._scrollable.scrollTop, _this._scrollable.scrollHeight, _this._scrollable.clientHeight);

          _this.setState({
            scrollTop: _this._scrollable.scrollTop
          });
        }
      });

      _this.state = {
        scrollTop: 0
      };
      return _this;
    }

    _createClass(_temp, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            TableHeight = _this$props2.TableHeight,
            TableWidth = _this$props2.TableWidth;
        var scrollStyle = {
          'overflow': TableHeight && TableWidth ? 'scroll' : null,
          'overflowY': TableHeight && !TableWidth ? 'scroll' : null,
          'overflowX': !TableHeight && TableWidth ? 'scroll' : null,
          'height': TableHeight ? TableHeight : null,
          'width': TableWidth ? TableWidth : null,
          'display': 'inline-block'
        };
        return _react.default.createElement("div", {
          ref: function ref(_ref) {
            return _this2._scrollable = _ref;
          },
          style: scrollStyle,
          onScroll: this._scroll
        }, _react.default.createElement(OriginalComponent, this.props));
      }
    }]);

    return _temp;
  }(_react.Component), _temp));
};

var _default = Table;
exports.default = _default;