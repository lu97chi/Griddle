"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash.merge"));

var _lodash2 = _interopRequireDefault(require("lodash.pickby"));

var _lodash3 = _interopRequireDefault(require("lodash.compact"));

var _lodash4 = _interopRequireDefault(require("lodash.flatten"));

var _compositionUtils = require("./compositionUtils");

var _columnUtils = require("./columnUtils");

var _rowUtils = require("./rowUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function initializer(defaults) {
  if (!this) throw new Error('this missing!');

  var _ref = defaults || {},
      defaultReducer = _ref.reducer,
      components = _ref.components,
      settingsComponentObjects = _ref.settingsComponentObjects,
      selectors = _ref.selectors,
      defaultStyleConfig = _ref.styleConfig,
      defaultInitialState = _objectWithoutProperties(_ref, ["reducer", "components", "settingsComponentObjects", "selectors", "styleConfig"]);

  var _this$props = this.props,
      _this$props$plugins = _this$props.plugins,
      plugins = _this$props$plugins === void 0 ? [] : _this$props$plugins,
      _this$props$data = _this$props.data,
      data = _this$props$data === void 0 ? [] : _this$props$data,
      rowPropertiesComponent = _this$props.children,
      _this$props$events = _this$props.events,
      userEvents = _this$props$events === void 0 ? {} : _this$props$events,
      _this$props$styleConf = _this$props.styleConfig,
      userStyleConfig = _this$props$styleConf === void 0 ? {} : _this$props$styleConf,
      userComponents = _this$props.components,
      _this$props$renderPro = _this$props.renderProperties,
      userRenderProperties = _this$props$renderPro === void 0 ? {} : _this$props$renderPro,
      userSettingsComponentObjects = _this$props.settingsComponentObjects,
      _this$props$reduxMidd = _this$props.reduxMiddleware,
      reduxMiddleware = _this$props$reduxMidd === void 0 ? [] : _this$props$reduxMidd,
      _this$props$listeners = _this$props.listeners,
      listeners = _this$props$listeners === void 0 ? {} : _this$props$listeners,
      userInitialState = _objectWithoutProperties(_this$props, ["plugins", "data", "children", "events", "styleConfig", "components", "renderProperties", "settingsComponentObjects", "reduxMiddleware", "listeners"]);

  var rowProperties = (0, _rowUtils.getRowProperties)(rowPropertiesComponent);
  var columnProperties = (0, _columnUtils.getColumnProperties)(rowPropertiesComponent); // Combine / compose the reducers to make a single, unified reducer

  var reducer = (0, _compositionUtils.buildGriddleReducer)([defaultReducer].concat(_toConsumableArray(plugins.map(function (p) {
    return p.reducer;
  })))); // Combine / Compose the components to make a single component for each component type

  this.components = (0, _compositionUtils.buildGriddleComponents)([components].concat(_toConsumableArray(plugins.map(function (p) {
    return p.components;
  })), [userComponents]));
  this.settingsComponentObjects = Object.assign.apply(Object, [_objectSpread({}, settingsComponentObjects)].concat(_toConsumableArray(plugins.map(function (p) {
    return p.settingsComponentObjects;
  })), [userSettingsComponentObjects]));
  this.events = Object.assign.apply(Object, [{}, userEvents].concat(_toConsumableArray(plugins.map(function (p) {
    return p.events;
  }))));
  this.selectors = plugins.reduce(function (combined, plugin) {
    return _objectSpread({}, combined, plugin.selectors);
  }, _objectSpread({}, selectors));

  var styleConfig = _lodash.default.apply(void 0, [_objectSpread({}, defaultStyleConfig)].concat(_toConsumableArray(plugins.map(function (p) {
    return p.styleConfig;
  })), [userStyleConfig])); // TODO: This should also look at the default and plugin initial state objects


  var renderProperties = Object.assign.apply(Object, [{
    rowProperties: rowProperties,
    columnProperties: columnProperties
  }].concat(_toConsumableArray(plugins.map(function (p) {
    return p.renderProperties;
  })), [userRenderProperties])); // TODO: Make this its own method

  var initialState = _lodash.default.apply(void 0, [defaultInitialState].concat(_toConsumableArray(plugins.map(function (p) {
    return p.initialState;
  })), [userInitialState, {
    data: data,
    renderProperties: renderProperties,
    styleConfig: styleConfig
  }]));

  var sanitizedListeners = (0, _lodash2.default)(listeners, function (value) {
    return typeof value === 'function';
  });
  this.listeners = plugins.reduce(function (combined, plugin) {
    return _objectSpread({}, combined, (0, _lodash2.default)(plugin.listeners, function (value) {
      return typeof value === 'function';
    }));
  }, sanitizedListeners);
  return {
    initialState: initialState,
    reducer: reducer,
    reduxMiddleware: (0, _lodash3.default)([].concat(_toConsumableArray((0, _lodash4.default)(plugins.map(function (p) {
      return p.reduxMiddleware;
    }))), _toConsumableArray(reduxMiddleware)))
  };
}

var _default = initializer;
exports.default = _default;