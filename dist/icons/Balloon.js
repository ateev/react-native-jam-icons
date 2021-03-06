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

var Balloon = function Balloon(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 52 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M50 38.2c-6.2 1-11 6.3-11 12.8 0 5.5-4.5 10-10 10s-10-4.5-10-10h3c1.1 0 1.7-.9 1.4-1.9l-.7-2.1.7-2.1c0-.1.1-.2.1-.4C30.7 40.7 36 29.7 36 21.3 36 11 27.9 0 18 0S0 11 0 21.3c0 8.4 5.3 19.4 12.6 23.3 0 .1 0 .2.1.4l.7 2.1-.7 2.1c-.4 1 .2 1.8 1.3 1.8h2c0 7.2 5.8 13 13 13s13-5.8 13-13c0-4.8 3.4-8.9 8-9.8 0 0 1.6-.2 1.6-1.7S50 38.2 50 38.2zM4 21.3C4 12.5 10.9 4 18 4s14 8.5 14 17.3C32 30.8 24.5 42 18 42S4 30.8 4 21.3zM20 46v2h-4v-2h4z",
      fill: color
    })
  );
};

exports.default = Balloon;