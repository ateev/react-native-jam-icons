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

var Heart = function Heart(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 62 57" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M56.2 5.3c-7-7-18.3-7.1-25.3-.2l-.2.2-.2-.2c-6.8-6.9-18.1-6.8-25.2.2-7 7-7.1 18.3-.2 25.3l25.7 25.7 25.7-25.7c6.9-6.9 6.8-18.2-.3-25.3zm-3.6 23.4L30.8 50.6 8.9 28.7C3 22.8 2.7 13.6 8.2 8.2c5.4-5.5 14.6-5.2 20.5.7l2.1 2.1 2.1-2.1c5.8-5.9 15-6.2 20.5-.7 5.5 5.4 5.1 14.6-.8 20.5z",
      fill: color
    })
  );
};

exports.default = Heart;