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

var BackwardF = function BackwardF(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 65 52" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M61.8.6L40.3 14.7V2c0-1.7-1.1-2.3-2.5-1.4L1.5 24.4c-1.4.9-1.4 2.4 0 3.3l36.3 23.8c1.4.9 2.5.3 2.5-1.4V37.4l21.5 14.1c1.4.9 2.5.3 2.5-1.4V2c0-1.7-1.1-2.3-2.5-1.4z",
      fill: color
    })
  );
};

exports.default = BackwardF;