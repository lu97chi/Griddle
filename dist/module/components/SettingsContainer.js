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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function getSettingsComponentsArrayFromObject(settingsObject, settingsComponents) {
  //TODO: determine if we need to make this faster
  return settingsObject ? Object.keys(settingsObject).sort(function (a, b) {
    var oa = settingsObject[a],
        ob = settingsObject[b];
    return (oa && oa.order || 0) - (ob && ob.order || 0);
  }).map(function (key) {
    return settingsObject[key] && (settingsObject[key].component || settingsComponents && settingsComponents[key]);
  }) : null;
}

var EnhancedSettings = function EnhancedSettings(OriginalComponent) {
  return (0, _compose.default)((0, _getContext.default)({
    components: _propTypes.default.object,
    settingsComponentObjects: _propTypes.default.object
  }), (0, _griddleConnect.connect)(function (state, props) {
    return {
      className: (0, _dataSelectors.classNamesForComponentSelector)(state, 'Settings'),
      style: (0, _dataSelectors.stylesForComponentSelector)(state, 'Settings')
    };
  }), (0, _mapProps.default)(function (props) {
    var components = props.components,
        settingsComponentObjects = props.settingsComponentObjects,
        otherProps = _objectWithoutProperties(props, ["components", "settingsComponentObjects"]);

    return _objectSpread({
      settingsComponents: getSettingsComponentsArrayFromObject(settingsComponentObjects, components.SettingsComponents)
    }, otherProps);
  }))(function (props) {
    return _react.default.createElement(OriginalComponent, props);
  });
};

var _default = EnhancedSettings;
exports.default = _default;