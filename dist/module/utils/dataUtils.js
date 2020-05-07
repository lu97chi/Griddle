"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIncrementer = getIncrementer;
exports.transformData = transformData;
exports.getVisibleDataForColumns = getVisibleDataForColumns;
exports.hasColumnProperties = hasColumnProperties;
exports.hasData = hasData;
exports.addColumnPropertiesWhenNoneExist = addColumnPropertiesWhenNoneExist;

var _immutable = _interopRequireDefault(require("immutable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//From Immutable docs - https://github.com/facebook/immutable-js/wiki/Predicates
function keyInArray(keys) {
  var keySet = _immutable.default.Set(keys);

  return function (v, k) {
    return keySet.has(k);
  };
}

function getIncrementer(startIndex) {
  var key = startIndex;
  return function () {
    return key++;
  };
}

function isImmutableConvertibleValue(value) {
  return _typeof(value) !== 'object' || value === null || value instanceof Date;
} // From https://github.com/facebook/immutable-js/wiki/Converting-from-JS-objects#custom-conversion


function fromJSGreedy(js) {
  return isImmutableConvertibleValue(js) ? js : Array.isArray(js) ? _immutable.default.Seq(js).map(fromJSGreedy).toList() : _immutable.default.Seq(js).map(fromJSGreedy).toMap();
}

function transformData(data, renderProperties) {
  if (!data) {
    return {};
  }

  var hasCustomRowId = renderProperties.rowProperties && renderProperties.rowProperties.rowKey; // Validate that the first item in our data has the custom Griddle key

  if (hasCustomRowId && data.length > 0 && !data[0].hasOwnProperty(renderProperties.rowProperties.rowKey)) {
    throw new Error("Griddle: Property '".concat(renderProperties.rowProperties.rowKey, "' doesn't exist in row data. Please specify a rowKey that exists in <RowDefinition>"));
  }

  var list = [];
  var lookup = {};
  data.forEach(function (rowData, index) {
    var map = fromJSGreedy(rowData); // if this has a row key use that -- otherwise use Griddle key

    var key = hasCustomRowId ? rowData[renderProperties.rowProperties.rowKey] : index; // if our map object already has griddleKey use that -- otherwise add key as griddleKey

    var keyedData = map.has('griddleKey') ? map : map.set('griddleKey', key);
    list.push(keyedData);
    lookup[key] = index;
  });
  return {
    data: new _immutable.default.List(list),
    lookup: new _immutable.default.Map(lookup)
  };
}
/** Gets the visible data based on columns
 *  @param (List<Map>) data - data collection
 *  @param (array<string>) columns - list of columns to display
 *
 *  TODO: Needs tests
 */


function getVisibleDataForColumns(data, columns) {
  if (data.size < 1) {
    return data;
  }

  var dataColumns = data.get(0).keySeq().toArray();
  var metadataColumns = dataColumns.filter(function (item) {
    return columns.indexOf(item) < 0;
  }); //if columns are specified but aren't in the data
  //make it up (as null). We will append this column
  //to the resultant data

  var magicColumns = columns.filter(function (item) {
    return dataColumns.indexOf(item) < 0;
  }).reduce(function (original, item) {
    original[item] = null;
    return original;
  }, {}); //combine the metadata and the "magic" columns

  var extra = data.map(function (d, i) {
    return new _immutable.default.Map(Object.assign(magicColumns));
  });
  var result = data.map(function (d) {
    return d.filter(keyInArray(columns));
  });
  return result.mergeDeep(extra).map(function (item) {
    return item.sortBy(function (val, key) {
      return columns.indexOf(key) > -1 ? columns.indexOf(key) : MAX_SAFE_INTEGER;
    });
  });
}
/* TODO: Add documentation and tests for this whole section!*/

/** Does this initial state object have column properties?
 * @param (object) stateObject - a non-immutable state object for initialization
 *
 * TODO: Needs tests
 */


function hasColumnProperties(stateObject) {
  return stateObject.hasOwnProperty('renderProperties') && stateObject.renderProperties.hasOwnProperty('columnProperties') && Object.keys(stateObject.renderProperties.columnProperties).length > 0;
}
/** Does this initial state object have data?
 * @param (object) stateObject - a non-immutable state object for initialization
 */


function hasData(stateObject) {
  return !!stateObject.data && stateObject.data.length > 0;
}
/** Gets a new state object (not immutable) that has columnProperties if none exist
 * @param (object) stateObject - a non-immutable state object for initialization
 *
 * TODO: Needs tests
 */


function addColumnPropertiesWhenNoneExist(stateObject) {
  if (!hasData(stateObject) || hasColumnProperties(stateObject)) {
    return stateObject;
  }

  return _objectSpread({}, stateObject, {
    renderProperties: {
      columnProperties: Object.keys(stateObject.data[0]).reduce(function (previous, current) {
        previous[current] = {
          id: current,
          visible: true
        };
        return previous;
      }, {})
    }
  });
}