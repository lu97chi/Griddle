"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visibleRowIdsSelector = exports.visibleDataSelector = exports.currentPageDataSelector = exports.bottomSpacerSelector = exports.topSpacerSelector = exports.endIndexSelector = exports.startIndexSelector = exports.verticalScrollChangeSelector = exports.hoizontalScrollChangeSelector = exports.visibleDataLengthSelector = exports.visibleRecordCountSelector = exports.tableWidthSelector = exports.tableHeightSelector = exports.currentHeightSelector = exports.rowHeightSelector = exports.positionSettingsSelector = void 0;

var _reselect = require("reselect");

var _localSelectors = require("../../local/selectors/localSelectors");

var positionSettingsSelector = function positionSettingsSelector(state) {
  return state.get('positionSettings');
};

exports.positionSettingsSelector = positionSettingsSelector;

var rowHeightSelector = function rowHeightSelector(state) {
  return state.getIn(['positionSettings', 'rowHeight']);
};

exports.rowHeightSelector = rowHeightSelector;

var currentHeightSelector = function currentHeightSelector(state) {
  return state.getIn(['currentPosition', 'height']);
};

exports.currentHeightSelector = currentHeightSelector;

var tableHeightSelector = function tableHeightSelector(state) {
  return state.getIn(['positionSettings', 'tableHeight']);
};

exports.tableHeightSelector = tableHeightSelector;

var tableWidthSelector = function tableWidthSelector(state) {
  return state.getIn(['positionSettings', 'tableWidth']);
}; // From what i can tell from the original virtual scrolling plugin...
// 1. We want to get the visible record count
// 2. Get the size of the dataset we're working with (whether thats local or remote)
// 3. Figure out the renderedStart and End display index
// 4. Show only the records that'd fall in the render indexes

/** Gets the number of viisble rows based on the height of the container and the rowHeight
 */


exports.tableWidthSelector = tableWidthSelector;
var visibleRecordCountSelector = (0, _reselect.createSelector)(rowHeightSelector, currentHeightSelector, function (rowHeight, currentHeight) {
  return Math.ceil(currentHeight / rowHeight);
});
exports.visibleRecordCountSelector = visibleRecordCountSelector;
var visibleDataLengthSelector = (0, _reselect.createSelector)(_localSelectors.sortedDataSelector, function (sortedData) {
  return sortedData.size;
});
exports.visibleDataLengthSelector = visibleDataLengthSelector;

var hoizontalScrollChangeSelector = function hoizontalScrollChangeSelector(state) {
  return state.getIn(['currentPosition', 'xScrollChangePosition']) || 0;
};

exports.hoizontalScrollChangeSelector = hoizontalScrollChangeSelector;

var verticalScrollChangeSelector = function verticalScrollChangeSelector(state) {
  return state.getIn(['currentPosition', 'yScrollChangePosition']) || 0;
};

exports.verticalScrollChangeSelector = verticalScrollChangeSelector;
var startIndexSelector = (0, _reselect.createSelector)(verticalScrollChangeSelector, rowHeightSelector, visibleRecordCountSelector, function (verticalScrollPosition, rowHeight, visibleRecordCount) {
  // Inspired by : http://jsfiddle.net/vjeux/KbWJ2/9/
  return Math.max(0, Math.floor(Math.floor(verticalScrollPosition / rowHeight) - visibleRecordCount * 0.25));
});
exports.startIndexSelector = startIndexSelector;
var endIndexSelector = (0, _reselect.createSelector)(startIndexSelector, visibleRecordCountSelector, visibleDataLengthSelector, function (startDisplayIndex, visibleRecordCount, visibleDataLength) {
  // Inspired by : http://jsfiddle.net/vjeux/KbWJ2/9/
  return Math.min(Math.floor(startDisplayIndex + visibleRecordCount * 2), visibleDataLength - 1) + 1;
});
exports.endIndexSelector = endIndexSelector;
var topSpacerSelector = (0, _reselect.createSelector)(rowHeightSelector, startIndexSelector, function (rowHeight, startIndex) {
  return rowHeight * startIndex;
});
exports.topSpacerSelector = topSpacerSelector;
var bottomSpacerSelector = (0, _reselect.createSelector)(rowHeightSelector, visibleDataLengthSelector, endIndexSelector, function (rowHeight, visibleDataLength, endIndex) {
  return rowHeight * (visibleDataLength - endIndex);
});
/** Gets the current page of data
 * Won't be memoized :cry:
 */

exports.bottomSpacerSelector = bottomSpacerSelector;

var currentPageDataSelector = function currentPageDataSelector() {
  return (0, _reselect.createSelector)(_localSelectors.sortedDataSelector, startIndexSelector, endIndexSelector, function (sortedData, startDisplayIndex, endDisplayIndex) {
    return sortedData.skip(startDisplayIndex).take(endDisplayIndex - startDisplayIndex);
  }).apply(void 0, arguments);
};
/** Get the visible data (and only the columns that are visible)
 */


exports.currentPageDataSelector = currentPageDataSelector;
var visibleDataSelector = (0, _reselect.createSelector)(currentPageDataSelector, _localSelectors.visibleColumnsSelector, function (currentPageData, visibleColumns) {
  return getVisibleDataForColumns(currentPageData, visibleColumns);
});
/** Gets the griddleIds for the visible rows */

exports.visibleDataSelector = visibleDataSelector;
var visibleRowIdsSelector = (0, _reselect.createSelector)(currentPageDataSelector, function (currentPageData) {
  return currentPageData.map(function (c) {
    return c.get('griddleKey');
  });
});
exports.visibleRowIdsSelector = visibleRowIdsSelector;