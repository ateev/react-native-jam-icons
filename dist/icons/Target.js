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

var Target = function Target(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M42 30h-8v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8h-8c-1.1 0-2 .9-2 2s.9 2 2 2h8v8c0 1.1.9 2 2 2s2-.9 2-2v-8h8c1.1 0 2-.9 2-2s-.9-2-2-2zm20 0h-2.1c-1-13.9-12-24.9-25.9-25.9V2c0-1.1-.9-2-2-2s-2 .9-2 2v2.1C16.1 5.1 5.1 16.1 4.1 30H2c-1.1 0-2 .9-2 2s.9 2 2 2h2.1c1 13.9 12.1 24.9 25.9 25.9V62c0 1.1.9 2 2 2s2-.9 2-2v-2.1c13.9-1 24.9-12.1 25.9-25.9H62c1.1 0 2-.9 2-2s-.9-2-2-2zM34 55.9V54c0-1.1-.9-2-2-2s-2 .9-2 2v1.9C18.3 54.9 9.1 45.7 8.1 34H10c1.1 0 2-.9 2-2s-.9-2-2-2H8.1C9.1 18.3 18.3 9.1 30 8.1V10c0 1.1.9 2 2 2s2-.9 2-2V8.1c11.7 1 20.9 10.3 21.9 21.9H54c-1.1 0-2 .9-2 2s.9 2 2 2h1.9c-1 11.7-10.2 20.9-21.9 21.9z",
      fill: color
    })
  );
};

exports.default = Target;