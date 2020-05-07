"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreListener = void 0;

var _temp;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StoreListener = (_temp = function StoreListener(store) {
  var _this = this;

  _classCallCheck(this, StoreListener);

  _defineProperty(this, "removeListener", function (name) {
    if (_this.unsubscribers.hasOwnProperty(name)) {
      _this.unsubscribers[name]();

      delete _this.unsubscribers[name];
      return true;
    } else {
      return false;
    }
  });

  _defineProperty(this, "addListener", function (listener, name, otherArgs) {
    // attempt to unsubscribe an existing listener if the new 
    // listener name matches
    // if no name is provided, do nothing
    name && _this.removeListener(name);

    var unsubscribe = function () {
      var oldState;
      return _this.store.subscribe(function () {
        var newState = _this.store.getState();

        listener(oldState, newState, _objectSpread({}, otherArgs));
        oldState = newState;
      });
    }(); // if name was provided, add the unsubscribe
    // otherwise this is an "anonymous" listener


    name && (_this.unsubscribers[name] = unsubscribe);
    return unsubscribe;
  });

  _defineProperty(this, "hasListener", function (name) {
    return _this.unsubscribers.hasOwnProperty(name);
  });

  this.store = store;
  this.unsubscribers = {};
}, _temp);
exports.StoreListener = StoreListener;