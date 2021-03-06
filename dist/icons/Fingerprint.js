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

var Fingerprint = function Fingerprint(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 42 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M16 30c-1.1 0-2 .9-2 2v11c0 3.9 3.1 7 7 7s7-3.1 7-7v-3c0-1.1-.9-2-2-2s-2 .9-2 2v3c0 1.7-1.3 3-3 3s-3-1.4-3-3V32c0-1.1-.9-2-2-2zm12-9c0-3.9-3.1-7-7-7s-7 3.1-7 7v3c0 1.1.9 2 2 2s2-.9 2-2v-3c0-1.7 1.3-3 3-3s3 1.4 3 3v11c0 1.1.9 2 2 2s2-.9 2-2V21zM18 60c-8-1.5-14-8.4-14-16.8V28c0-1.1-.9-2-2-2s-2 .9-2 2v15.2c0 10.4 7.5 19 17.4 20.7.2.1.4.1.6.1 1.1 0 2-.9 2-2s-.9-2-2-2zm22-24c-1.1 0-2 .9-2 2v5.2c0 8.4-6 15.3-14 16.7v.1c-1.1 0-2 .9-2 2s.9 2 2 2c.2 0 .4 0 .6-.1C34.5 62.2 42 53.6 42 43.2V38c0-1.1-.9-2-2-2zM21 0C9.9 0 .8 8.6 0 19.6v.4c0 1.1.9 2 2 2s2-.9 2-1.9C4.5 11.1 11.9 4 21 4c9.4 0 17 7.6 17 17v10.1c.1 1.1.9 1.9 2 1.9s1.9-.8 2-1.9V21C42 9.4 32.6 0 21 0zm14 43V31c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 5.5-4.5 10-10 10-5.2 0-9.4-3.9-10-9 0-1.1-.9-2-2-2s-2 .9-2 2c0 .2 0 .4.1.6.8 7 6.7 12.4 13.9 12.4 7.7 0 14-6.3 14-14zm-2-18c1.1 0 2-.9 2-2v-2c0-7.7-6.3-14-14-14S7 13.3 7 21v15c0 1.1.9 2 2 2s2-.9 2-2V21c0-5.5 4.5-10 10-10s10 4.5 10 10v2c0 1.1.9 2 2 2z",
      fill: color
    })
  );
};

exports.default = Fingerprint;