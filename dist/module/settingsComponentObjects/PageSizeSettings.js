"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _griddleConnect = require("../utils/griddleConnect");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _withState = _interopRequireDefault(require("recompose/withState"));

var _withHandlers = _interopRequireDefault(require("recompose/withHandlers"));

var _dataSelectors = require("../selectors/dataSelectors");

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComposedPageSizeSettings = (0, _compose.default)((0, _griddleConnect.connect)(function (state) {
  return {
    pageSize: (0, _dataSelectors.pageSizeSelector)(state)
  };
}, {
  setPageSize: _actions.setPageSize
}), (0, _withState.default)('value', 'updateValue', ''), (0, _withHandlers.default)({
  onChange: function onChange(props) {
    return function (e) {
      props.updateValue(e.target.value);
    };
  },
  onSave: function onSave(props) {
    return function (e) {
      props.setPageSize(props.value);
    };
  }
}))(function (_ref) {
  var pageSize = _ref.pageSize,
      onChange = _ref.onChange,
      onSave = _ref.onSave;
  return _react.default.createElement("div", null, _react.default.createElement("input", {
    type: "text",
    onChange: onChange,
    defaultValue: pageSize
  }), _react.default.createElement("button", {
    type: "button",
    onClick: onSave
  }, "Save"));
});
var _default = ComposedPageSizeSettings;
exports.default = _default;