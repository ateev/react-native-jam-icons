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

var Mic = function Mic(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 39 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M28.5 14h10v-3c0-.3 0-.7-.1-1-.5-5.6-5.2-10-10.9-10h-16C5.8 0 1.1 4.4.6 10v4h10c.5 0 1 .4 1 1s-.4 1-1 1H.6v10h10c.5 0 1 .4 1 1s-.4 1-1 1H.6v10h10c.5 0 1 .4 1 1s-.4 1-1 1H.6v2c0 6.1 4.9 11 11 11h2v11h12V53h2c6.1 0 11-4.9 11-11v-2h-10c-.5 0-1-.4-1-1s.4-1 1-1h10V28h-10c-.5 0-1-.4-1-1s.4-1 1-1h10V16h-10c-.5 0-1-.4-1-1-.1-.6.3-1 .9-1zm0 6h6v2h-6c-2.8 0-5 2.2-5 5s2.2 5 5 5h6v2h-6c-2.8 0-5 2.2-5 5s2.2 5 5 5h5.4c-1.2 2.9-4.1 5-7.4 5h-5v11h-4V49h-5c-3.4 0-6.2-2.1-7.4-5h5.4c2.8 0 5-2.2 5-5s-2.2-5-5-5h-6v-2h6c2.8 0 5-2.2 5-5s-2.2-5-5-5h-6v-2h6c2.8 0 5-2.2 5-5s-2.2-5-5-5H4.8c.9-3.4 4-6 7.7-6h14c3.7 0 6.8 2.6 7.7 6h-5.7c-2.8 0-5 2.2-5 5s2.2 5 5 5z",
      fill: color
    })
  );
};

exports.default = Mic;