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

var Wifi = function Wifi(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 43" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      className: "st0",
      d: "M32 20c-7.2 0-13.5 3.8-17 9.5l2.9 3.1c2.7-5.1 8-8.6 14.2-8.6 6.1 0 11.5 3.4 14.1 8.5l2.9-3.1C45.5 23.8 39.2 20 32 20z"
    }),
    _react2.default.createElement(Circle, { className: "st0", cx: 32, cy: 38, r: 5 }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      className: "st0",
      d: "M32 0C19.5 0 8.2 5.2.1 13.7l2.7 2.9C10.2 8.8 20.5 4 32 4s21.8 4.8 29.1 12.5l2.7-2.9C55.8 5.2 44.5 0 32 0zm0 10c-9.9 0-18.7 4.5-24.5 11.5l2.8 2.9C15.3 18.1 23.2 14 32 14c8.8 0 16.6 4 21.8 10.4l2.8-2.9C50.6 14.4 41.8 10 32 10z"
    })
  );
};

exports.default = Wifi;