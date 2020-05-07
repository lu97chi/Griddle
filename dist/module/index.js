"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.forin"));

var _lodash2 = _interopRequireDefault(require("lodash.pickby"));

var _core = _interopRequireDefault(require("./core"));

var _initializer = _interopRequireDefault(require("./utils/initializer"));

var _listenerUtils = require("./utils/listenerUtils");

var actions = _interopRequireWildcard(require("./actions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Griddle =
/*#__PURE__*/
function (_Component) {
  _inherits(Griddle, _Component);

  function Griddle(props) {
    var _this;

    _classCallCheck(this, Griddle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Griddle).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getStoreKey", function () {
      return _this.props.storeKey || Griddle.storeKey || 'store';
    });

    var _props$core = props.core,
        core = _props$core === void 0 ? _core.default : _props$core,
        _props$storeKey = props.storeKey,
        storeKey = _props$storeKey === void 0 ? Griddle.storeKey || 'store' : _props$storeKey;

    var _init$call = _initializer.default.call(_assertThisInitialized(_this), core),
        initialState = _init$call.initialState,
        reducer = _init$call.reducer,
        reduxMiddleware = _init$call.reduxMiddleware;

    var composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
    _this.store = (0, _redux.createStore)(reducer, initialState, composeEnhancers(_redux.applyMiddleware.apply(void 0, _toConsumableArray(reduxMiddleware)))); // this.provider = createProvider(storeKey);

    _this.storeListener = new _listenerUtils.StoreListener(_this.store);
    (0, _lodash.default)(_this.listeners, function (listener, name) {
      _this.storeListener.addListener(listener, name, {
        events: _this.events,
        selectors: _this.selectors
      });
    });
    return _this;
  }

  _createClass(Griddle, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var newState = (0, _lodash2.default)(nextProps, function (value, key) {
        return _this2.props[key] !== value;
      }); // Only update the state if something has changed.

      if (Object.keys(newState).length > 0) {
        this.store.dispatch(actions.updateState(newState));
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      // As relevant property updates are captured in `componentWillReceiveProps`.
      // return false to prevent the the entire root node from being deleted.
      return false;
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        components: this.components,
        settingsComponentObjects: this.settingsComponentObjects,
        events: this.events,
        selectors: this.selectors,
        storeKey: this.getStoreKey(),
        storeListener: this.storeListener
      };
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.components.Layout) {
        return null;
      }

      return _react.default.createElement(_reactRedux.Provider, {
        store: this.store
      }, _react.default.createElement(this.components.Layout, null));
    }
  }]);

  return Griddle;
}(_react.Component);

_defineProperty(Griddle, "childContextTypes", {
  components: _propTypes.default.object.isRequired,
  settingsComponentObjects: _propTypes.default.object,
  events: _propTypes.default.object,
  selectors: _propTypes.default.object,
  storeKey: _propTypes.default.string,
  storeListener: _propTypes.default.object
});

Griddle.storeKey = 'store';
var _default = Griddle;
exports.default = _default;