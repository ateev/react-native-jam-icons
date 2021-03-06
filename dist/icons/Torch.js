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

var Torch = function Torch(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 26 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M25 24c.6-1.5 1-3.2 1-5 0-3.4-5.2-14.3-11.2-9.4L8.6 3c-.3-2.8-1.7-3-3-.6C5.6 2.4 0 11.8 0 19c0 1.8.4 3.5 1 5H.2c-.1.7-.2 1.3-.2 2 0 4 1.8 7.5 4.6 9.9L7 56.1c.4 3.5 2.7 6.4 5.8 7.9h.5c3.1-1.5 5.4-4.5 5.8-7.9l2.4-20.2C24.2 33.5 26 30 26 26c0-.7-.1-1.3-.2-2H25zM3 19c0-1.1.2-2.3.5-3.6.4-1.9 1.2-4 2.1-6.2l.6-1.4c.5 2.2 1.4 3.9 2.9 5 2.3 1.7 5.1 1.3 7.7-.9 1.2-1 2.1-.7 3.6 1.1.8 1 1.5 2.2 2 3.5.4 1.1.7 2.1.7 2.5 0 1.8-.5 3.5-1.3 5H18v-.5c0-2.8-2.2-7.5-5-7.5s-5 4.8-5 7.5v.5H4.3C3.5 22.5 3 20.8 3 19zm8 4.5c0-.8.4-2.2 1.1-3.3.3-.5.6-.9.9-1.1.3.2.6.6.9 1.1.6 1.1 1.1 2.5 1.1 3.3 0 .2 0 .3-.1.5H11v-.5zm5.1 32.2c-.2 1.9-1.4 3.8-3.1 5-1.7-1.2-2.8-3-3.1-5L7.7 37h10.5l-2.1 18.7zm3.4-22.1l-.5.4H7l-.5-.4c-2-1.7-3.2-4-3.5-6.6h20c-.3 2.6-1.6 4.9-3.5 6.6zM11 45.1c-.6 0-1 .5-.9 1.1l.8 9c0 .6.5 1 1.1.9s1-.5.9-1.1l-.8-9c-.1-.6-.6-1-1.1-.9z",
      fill: color
    })
  );
};

exports.default = Torch;