"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _components = _interopRequireDefault(require("../components"));

var reducer = _interopRequireWildcard(require("../reducers/dataReducer"));

var selectors = _interopRequireWildcard(require("../selectors/dataSelectors"));

var actions = _interopRequireWildcard(require("../actions"));

var _settingsComponentObjects = _interopRequireDefault(require("../settingsComponentObjects"));

var _initialState = _interopRequireDefault(require("./initialState"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CorePlugin = _objectSpread({
  components: _components.default,
  settingsComponentObjects: _settingsComponentObjects.default,
  reducer: reducer,
  selectors: selectors,
  actions: actions
}, _initialState.default);

var _default = CorePlugin;
exports.default = _default;