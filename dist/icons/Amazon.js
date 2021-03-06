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

var Amazon = function Amazon(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 62 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M54.3 53C28 65.2 11.6 55 1.2 48.8c-.6-.4-1.7.1-.8 1.2 3.5 4.1 14.9 14 29.8 14s23.8-7.9 24.9-9.3c1.1-1.4.3-2.1-.8-1.7zm7.4-3.9c-.7-.9-4.3-1.1-6.6-.8-2.3.3-5.7 1.6-5.4 2.4.2.3.5.2 2 0 1.6-.2 5.9-.7 6.8.5.9 1.2-1.4 6.7-1.8 7.6-.4.9.2 1.1.9.5.8-.6 2.1-2.1 3-4.3 1.1-2.2 1.7-5.3 1.1-5.9zM36.3 18.5c-7 .2-24.3 2.2-24.3 16.6 0 15.5 19.9 16.2 26.4 6.1.3.4.5.8.9 1.2 2.4 2.5 5.6 5.4 5.6 5.4L53 40s-4.6-3.6-4.6-7.5V11.7C48.4 8.1 44.9 0 32.2 0 19.6 0 12.9 7.8 12.9 14.8l10.5.9s2.4-7 7.8-7c5.5 0 5.1 4.4 5.1 5.3v4.5zm0 12.3c0 11.4-12.1 9.6-12.1 2.4 0-6.7 7.2-8 12.1-8.2v5.8z",
      fill: color
    })
  );
};

exports.default = Amazon;