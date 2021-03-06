"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNativeSvg = require("react-native-svg");

var _reactNativeSvg2 = _interopRequireDefault(_reactNativeSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Moon = function Moon(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 65 61" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M48 40C29.6 40 15 25.4 15 8c0-2.5.3-4.9.8-7.3C6.3 6.5 0 16.9 0 29c0 17.4 14.6 32 33 32 15.3 0 28.3-11.1 31.3-25.6C59.5 38.3 53.9 40 48 40zM33 57C16.9 57 4 44.4 4 29c0-7.3 2.6-14 7-19.1C12 28.8 28.2 44 48 44c3.2 0 6.3-.4 9.3-1.2C52.4 51.3 43.2 57 33 57z",
      fill: color
    })
  );
};

exports.default = Moon;