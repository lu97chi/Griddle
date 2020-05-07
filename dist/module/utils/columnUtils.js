"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnProperties = getColumnProperties;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var offset = 1000;
/** Gets a column properties object from an array of columnNames
 * @param {Array<string>} columns - array of column names
 */

function getColumnPropertiesFromColumnArray(columnProperties, columns) {
  return columns.reduce(function (previous, current, i) {
    previous[current] = {
      id: current,
      order: offset + i
    };
    return previous;
  }, columnProperties);
}
/** Gets the column properties object from a react component (rowProperties) that contains child component(s) for columnProperties.
 *    If no properties are found, it will work return a column properties object based on the all columns array
 * @param {Object} rowProperties - An React component that contains the rowProperties and child columnProperties components
 * @param {Array<string> optional} allColumns - An optional array of colummn names. This will be used to generate the columnProperties when they are not defined in rowProperties
 */


function getColumnProperties(rowProperties) {
  var allColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var children = rowProperties && rowProperties.props && rowProperties.props.children;
  var columnProperties = {}; // Working against an array of columnProperties

  if (Array.isArray(children)) {
    // build one object that contains all of the column properties keyed by id
    children.reduce(function (previous, current, i) {
      if (current) {
        previous[current.props.id] = _objectSpread({
          order: offset + i
        }, current.props);
      }

      return previous;
    }, columnProperties); // Working against a lone, columnProperties object
  } else if (children && children.props) {
    columnProperties[children.props.id] = _objectSpread({
      order: offset
    }, children.props);
  }

  if (Object.keys(columnProperties).length === 0 && allColumns) {
    getColumnPropertiesFromColumnArray(columnProperties, allColumns);
  }

  return columnProperties;
}