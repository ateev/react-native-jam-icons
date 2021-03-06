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

var Chess = function Chess(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 36 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M31.5 55h-1.9l-3.1-22h.5c2.2 0 4-1.8 4-4s-1.8-4-4-4h-.4l1.6-8.1c.4-2.2-1-3.9-3.2-3.9h-3v-1h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2V2c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2h-2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2v1h-3c-2.2 0-3.7 1.8-3.2 3.9L9.4 25H9c-2.2 0-4 1.8-4 4s1.8 4 4 4h.6L6.4 55H4.5C2 55 0 57 0 59.5V62c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2v-2.5c0-2.5-2-4.5-4.5-4.5zM13 9V7h4V3h2v4h4v2h-4v4h-2V9h-4zm-2.3 7.3c0-.3 0-.3.3-.3h14c.3 0 .3 0 .3.3L23.5 25h-11l-1.8-8.7zM9 30c-.6 0-1-.5-1-1 0-.6.4-1 1-1h18c.6 0 1 .5 1 1 0 .6-.4 1-1 1H9zm3.6 3h10.8l3.1 22h-17l3.1-22zM33 61H3v-1.5c0-.8.7-1.5 1.5-1.5h27c.8 0 1.5.7 1.5 1.5V61z",
      fill: color
    })
  );
};

exports.default = Chess;