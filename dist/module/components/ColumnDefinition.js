"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var ColumnDefinition =
/*#__PURE__*/
function (_Component) {
  _inherits(ColumnDefinition, _Component);

  function ColumnDefinition() {
    _classCallCheck(this, ColumnDefinition);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColumnDefinition).apply(this, arguments));
  }

  _createClass(ColumnDefinition, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ColumnDefinition;
}(_react.Component);

exports.default = ColumnDefinition;

_defineProperty(ColumnDefinition, "propTypes", {
  //The name of the column that this definition applies to.
  id: _propTypes.default.string.isRequired,
  //The order that this column appears in. If not specified will just use the order that they are defined
  order: _propTypes.default.number,
  //Determines whether or not the user can disable this column from the settings.
  locked: _propTypes.default.bool,
  //The css class name, or a function to generate a class name from props, to apply to the header for the column.
  headerCssClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  //The css class name, or a function to generate a class name from props, to apply to this column.
  cssClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  //The display name for the column. This is used when the name in the column heading and settings should be different from the data passed in to the Griddle component.
  title: _propTypes.default.string,
  //The component that should be rendered instead of the standard column data. This component will still be rendered inside of a TD element.
  customComponent: _propTypes.default.func,
  //The component that should be used instead of the normal title
  customHeadingComponent: _propTypes.default.func,
  //Can this column be filtered
  filterable: _propTypes.default.bool,
  //Can this column be sorted
  sortable: _propTypes.default.bool,
  //What sort type this column uses - magic string :shame:
  sortType: _propTypes.default.string,
  //Any extra data that should be passed to each instance of this column
  extraData: _propTypes.default.object,
  //The width of this column -- this is string so things like % can be specified
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  //The number of cells this column should extend. Default is 1.
  colSpan: _propTypes.default.number,
  // Is this column visible
  visible: _propTypes.default.bool,
  // Is this column metadta
  isMetadata: _propTypes.default.bool
});