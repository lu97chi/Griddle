"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textSelector = exports.cellPropertiesSelector = exports.rowPropertiesSelector = exports.classNamesForComponentSelector = exports.stylesForComponentSelector = exports.iconsByNameSelector = exports.iconsForComponentSelector = exports.rowDataSelector = exports.cellValueSelector = exports.columnTitlesSelector = exports.columnIdsSelector = exports.hiddenColumnsSelector = exports.visibleRowCountSelector = exports.visibleRowIdsSelector = exports.visibleDataSelector = exports.currentPageDataSelector = exports.sortedDataSelector = exports.hasPreviousSelector = exports.hasNextSelector = exports.visibleColumnsSelector = exports.sortedColumnPropertiesSelector = exports.allColumnsSelector = exports.maxPageSelector = exports.filteredDataSelector = exports.metaDataColumnsSelector = exports.renderPropertiesSelector = exports.sortMethodSelector = exports.sortPropertiesSelector = exports.filterSelector = exports.pageSizeSelector = exports.currentPageSelector = exports.dataLoadingSelector = exports.dataSelector = void 0;

var _immutable = _interopRequireDefault(require("immutable"));

var _reselect = require("reselect");

var _lodash = _interopRequireDefault(require("lodash.isfinite"));

var _sortUtils = require("../../../utils/sortUtils");

var _dataUtils = require("../../../utils/dataUtils");

var dataSelectors = _interopRequireWildcard(require("../../../selectors/dataSelectors"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Gets the entire data set
 * @param {Immutable} state - state object
 */
var dataSelector = function dataSelector(state) {
  return state.get('data');
};

exports.dataSelector = dataSelector;
var dataLoadingSelector = dataSelectors.dataLoadingSelector;
/** Gets the current page from pageProperties
 * @param {Immutable} state - state object
 */

exports.dataLoadingSelector = dataLoadingSelector;

var currentPageSelector = function currentPageSelector(state) {
  return state.getIn(['pageProperties', 'currentPage']);
};
/** Gets the currently set page size
 * @param {Immutable} state - state object
 */


exports.currentPageSelector = currentPageSelector;

var pageSizeSelector = function pageSizeSelector(state) {
  return state.getIn(['pageProperties', 'pageSize']);
};
/** Gets the currently set filter
 */


exports.pageSizeSelector = pageSizeSelector;

var filterSelector = function filterSelector(state) {
  return state.get('filter') || '';
};

exports.filterSelector = filterSelector;

var sortPropertiesSelector = function sortPropertiesSelector(state) {
  return state.get('sortProperties');
};

exports.sortPropertiesSelector = sortPropertiesSelector;

var sortMethodSelector = function sortMethodSelector(state) {
  return state.get('sortMethod');
};

exports.sortMethodSelector = sortMethodSelector;

var renderPropertiesSelector = function renderPropertiesSelector(state) {
  return state.get('renderProperties');
};

exports.renderPropertiesSelector = renderPropertiesSelector;
var metaDataColumnsSelector = dataSelectors.metaDataColumnsSelector;
exports.metaDataColumnsSelector = metaDataColumnsSelector;

var columnPropertiesSelector = function columnPropertiesSelector(state) {
  return state.getIn(['renderProperties', 'columnProperties']);
};

var substringSearch = function substringSearch(value, filter) {
  if (!filter) {
    return true;
  }

  var filterToLower = filter.toLowerCase();
  return value && value.toString().toLowerCase().indexOf(filterToLower) > -1;
};

var filterable = function filterable(columnProperties, key) {
  if (key === 'griddleKey') {
    return false;
  }

  if (columnProperties) {
    if (columnProperties.get(key) === undefined || columnProperties.getIn([key, 'filterable']) === false) {
      return false;
    }
  }

  return true;
};

var textFilterRowSearch = function textFilterRowSearch(columnProperties, filter) {
  return function (row) {
    return row.keySeq().some(function (key) {
      if (!filterable(columnProperties, key)) {
        return false;
      }

      return substringSearch(row.get(key), filter);
    });
  };
};

var objectFilterRowSearch = function objectFilterRowSearch(columnProperties, filter) {
  return function (row, i, data) {
    return row.keySeq().every(function (key) {
      if (!filterable(columnProperties, key)) {
        return true;
      }

      var keyFilter = filter.get(key);

      switch (_typeof(keyFilter)) {
        case 'string':
          return substringSearch(row.get(key), keyFilter);
          break;

        case 'function':
          return keyFilter(row.get(key), i, data);
          break;

        default:
          return true;
          break;
      }
    });
  };
};
/** Gets the data filtered by the current filter
 */


var filteredDataSelector = (0, _reselect.createSelector)(dataSelector, filterSelector, columnPropertiesSelector, function (data, filter, columnProperties) {
  if (!filter || !data) {
    return data;
  }

  switch (_typeof(filter)) {
    case 'string':
      return data.filter(textFilterRowSearch(columnProperties, filter));

    case 'object':
      return data.filter(objectFilterRowSearch(columnProperties, filter));

    case 'function':
      return data.filter(filter);

    default:
      return data;
  }
});
/** Gets the max page size
 */

exports.filteredDataSelector = filteredDataSelector;
var maxPageSelector = (0, _reselect.createSelector)(pageSizeSelector, filteredDataSelector, function (pageSize, data) {
  var total = data ? data.size : 0;
  var calc = total / pageSize;
  var result = calc > Math.floor(calc) ? Math.floor(calc) + 1 : Math.floor(calc);
  return (0, _lodash.default)(result) ? result : 1;
});
exports.maxPageSelector = maxPageSelector;
var allColumnsSelector = (0, _reselect.createSelector)(dataSelector, function (data) {
  return !data || data.size === 0 ? [] : data.get(0).keySeq().toJSON();
});
/** Gets the column properties objects sorted by order
 */

exports.allColumnsSelector = allColumnsSelector;
var sortedColumnPropertiesSelector = dataSelectors.sortedColumnPropertiesSelector;
/** Gets the visible columns either obtaining the sorted column properties or all columns
 */

exports.sortedColumnPropertiesSelector = sortedColumnPropertiesSelector;
var visibleColumnsSelector = dataSelectors.visibleColumnsSelector;
/** Returns whether or not this result set has more pages
 */

exports.visibleColumnsSelector = visibleColumnsSelector;
var hasNextSelector = (0, _reselect.createSelector)(currentPageSelector, maxPageSelector, function (currentPage, maxPage) {
  return currentPage < maxPage;
});
/** Returns whether or not there is a previous page to the current data
 */

exports.hasNextSelector = hasNextSelector;

var hasPreviousSelector = function hasPreviousSelector(state) {
  return state.getIn(['pageProperties', 'currentPage']) > 1;
};
/** Gets the data sorted by the sort function specified in render properties
 *  if no sort method is supplied, it will use the default sort defined in griddle
 */


exports.hasPreviousSelector = hasPreviousSelector;
var sortedDataSelector = (0, _reselect.createSelector)(filteredDataSelector, sortPropertiesSelector, renderPropertiesSelector, sortMethodSelector, function (filteredData, sortProperties, renderProperties) {
  var sortMethod = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _sortUtils.defaultSort;

  if (!sortProperties) {
    return filteredData;
  }

  return sortProperties.reverse().reduce(function (data, sortColumnOptions) {
    var columnProperties = renderProperties && renderProperties.get('columnProperties').get(sortColumnOptions.get('id'));
    var sortFunction = columnProperties && columnProperties.get('sortMethod') || sortMethod;
    return sortFunction(data, sortColumnOptions.get('id'), sortColumnOptions.get('sortAscending'));
  }, filteredData);
});
/** Gets the current page of data
 */

exports.sortedDataSelector = sortedDataSelector;
var currentPageDataSelector = (0, _reselect.createSelector)(sortedDataSelector, pageSizeSelector, currentPageSelector, function (sortedData, pageSize, currentPage) {
  if (!sortedData) {
    return [];
  }

  return sortedData.skip(pageSize * (currentPage - 1)).take(pageSize);
});
/** Get the visible data (and only the columns that are visible)
 */

exports.currentPageDataSelector = currentPageDataSelector;
var visibleDataSelector = (0, _reselect.createSelector)(currentPageDataSelector, visibleColumnsSelector, function (currentPageData, visibleColumns) {
  return (0, _dataUtils.getVisibleDataForColumns)(currentPageData, visibleColumns);
});
/** Gets the griddleIds for the visible rows */

exports.visibleDataSelector = visibleDataSelector;
var visibleRowIdsSelector = (0, _reselect.createSelector)(currentPageDataSelector, function (currentPageData) {
  return currentPageData ? currentPageData.map(function (c) {
    return c.get('griddleKey');
  }) : new _immutable.default.List();
});
/** Gets the count of visible rows */

exports.visibleRowIdsSelector = visibleRowIdsSelector;
var visibleRowCountSelector = (0, _reselect.createSelector)(visibleRowIdsSelector, function (visibleRowIds) {
  return visibleRowIds.size;
});
/** Gets the columns that are not currently visible
 */

exports.visibleRowCountSelector = visibleRowCountSelector;
var hiddenColumnsSelector = (0, _reselect.createSelector)(visibleColumnsSelector, allColumnsSelector, metaDataColumnsSelector, function (visibleColumns, allColumns, metaDataColumns) {
  var removeColumns = [].concat(_toConsumableArray(visibleColumns), _toConsumableArray(metaDataColumns));
  return allColumns.filter(function (c) {
    return removeColumns.indexOf(c) === -1;
  });
});
/** Gets the column ids for the visible columns
*/

exports.hiddenColumnsSelector = hiddenColumnsSelector;
var columnIdsSelector = (0, _reselect.createSelector)(visibleDataSelector, renderPropertiesSelector, function (visibleData, renderProperties) {
  if (visibleData.size > 0) {
    return Object.keys(visibleData.get(0).toJSON()).map(function (k) {
      return renderProperties.getIn(['columnProperties', k, 'id']) || k;
    });
  }
});
/** Gets the column titles for the visible columns
 */

exports.columnIdsSelector = columnIdsSelector;
var columnTitlesSelector = dataSelectors.columnTitlesSelector;
exports.columnTitlesSelector = columnTitlesSelector;
var cellValueSelector = dataSelectors.cellValueSelector;
exports.cellValueSelector = cellValueSelector;
var rowDataSelector = dataSelectors.rowDataSelector;
exports.rowDataSelector = rowDataSelector;
var iconsForComponentSelector = dataSelectors.iconsForComponentSelector;
exports.iconsForComponentSelector = iconsForComponentSelector;
var iconsByNameSelector = dataSelectors.iconsForComponentSelector;
exports.iconsByNameSelector = iconsByNameSelector;
var stylesForComponentSelector = dataSelectors.stylesForComponentSelector;
exports.stylesForComponentSelector = stylesForComponentSelector;
var classNamesForComponentSelector = dataSelectors.classNamesForComponentSelector;
exports.classNamesForComponentSelector = classNamesForComponentSelector;
var rowPropertiesSelector = dataSelectors.rowPropertiesSelector;
exports.rowPropertiesSelector = rowPropertiesSelector;
var cellPropertiesSelector = dataSelectors.cellPropertiesSelector;
exports.cellPropertiesSelector = cellPropertiesSelector;
var textSelector = dataSelectors.textSelector;
exports.textSelector = textSelector;