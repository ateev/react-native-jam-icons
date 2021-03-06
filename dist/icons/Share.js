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

var Share = function Share(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 65 61" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M62.8 20.6L37.2 1.4C35.4.1 34 .8 34 3v10.7C14.8 17.5.1 37.1 0 60.8 5.9 45 18.7 33.6 34 32.2V43c0 2.2 1.4 2.9 3.2 1.6l25.6-19.2c1.8-1.3 1.8-3.5 0-4.8z",
      fill: color
    })
  );
};

exports.default = Share;