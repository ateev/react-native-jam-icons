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

var Files = function Files(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 58 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M44.6 10h-6.7l-10-10H1C.4 0 0 .5 0 1v52c0 .6.5 1 1 1h17v9c0 .6.5 1 1 1h38c.6 0 1-.5 1-1V23.4L44.6 10zM4 50V4h22.3l5.8 6H18v40H4zm50 10H22V14h21l11 11v35z",
      fill: color
    })
  );
};

exports.default = Files;