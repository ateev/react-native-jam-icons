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

var Football = function Football(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 38 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M19 0C13.6 0 0 14.3 0 32s14.1 32 19 32 19-14.3 19-32S24.4 0 19 0zm0 4c1.2 0 5 3.1 8.3 7.7l.2.3h-17l.2-.3C14 7.1 17.8 4 19 4zM8.1 16h21.8c2.6 5 4.1 10.5 4.1 16s-1.6 11-4.3 16H8.3C5.6 43 4 37.5 4 32s1.5-11 4.1-16zm13.4 42.4c-.8.6-1.5 1.1-2.1 1.4-.2.1-.3.1-.4.2-.1 0-.3-.1-.4-.2-.6-.3-1.3-.8-2.1-1.4-1.8-1.5-3.8-3.6-5.6-6.1l-.2-.3h16.6l-.2.3c-1.8 2.5-3.8 4.6-5.6 6.1zM15 30c-1.1 0-2 .9-2 2s.9 2 2 2h2v3h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2v1c0 1.1.9 2 2 2s2-.9 2-2v-1h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2v-3h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2v-3h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2v3h-2z",
      fill: color
    })
  );
};

exports.default = Football;