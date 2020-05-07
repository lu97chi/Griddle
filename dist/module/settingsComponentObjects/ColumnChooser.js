"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _griddleConnect = require("../utils/griddleConnect");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _withHandlers = _interopRequireDefault(require("recompose/withHandlers"));

var _dataSelectors = require("../selectors/dataSelectors");

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  label: {
    clear: 'both'
  }
};
var ComposedColumnSettings = (0, _compose.default)((0, _griddleConnect.connect)(function (state) {
  return {
    visibleColumns: (0, _dataSelectors.visibleColumnPropertiesSelector)(state),
    hiddenColumns: (0, _dataSelectors.hiddenColumnPropertiesSelector)(state)
  };
}, {
  toggleColumn: _actions.toggleColumn
}), (0, _withHandlers.default)({
  onToggle: function onToggle(_ref) {
    var toggleColumn = _ref.toggleColumn;
    return function (event) {
      toggleColumn(event.target.name);
    };
  }
}))(function (_ref2) {
  var visibleColumns = _ref2.visibleColumns,
      hiddenColumns = _ref2.hiddenColumns,
      onToggle = _ref2.onToggle;
  return _react.default.createElement("div", null, _react.default.createElement("div", null, _react.default.createElement("h4", null, "Visible Columns"), Object.keys(visibleColumns).map(function (v) {
    return _react.default.createElement("label", {
      htmlFor: visibleColumns[v].id,
      key: visibleColumns[v].id,
      style: style.label
    }, _react.default.createElement("input", {
      type: "checkbox",
      name: visibleColumns[v].id,
      checked: true,
      onChange: onToggle
    }), visibleColumns[v].title || visibleColumns[v].id);
  })), _react.default.createElement("div", null, _react.default.createElement("h4", null, "Hidden Columns"), Object.keys(hiddenColumns).map(function (v) {
    return _react.default.createElement("label", {
      key: hiddenColumns[v].id,
      htmlFor: hiddenColumns[v].id,
      style: style.label
    }, _react.default.createElement("input", {
      type: "checkbox",
      name: hiddenColumns[v].id,
      onChange: onToggle,
      defaultChecked: false
    }), hiddenColumns[v].title || hiddenColumns[v].id);
  })));
});
var _default = ComposedColumnSettings;
exports.default = _default;