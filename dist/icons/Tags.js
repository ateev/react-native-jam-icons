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

var Tags = function Tags(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 62 63" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M54.9 2.3L42.3.5c-1.1-.2-2.7.2-3.6.9L7.6 24c-.9.6-1.1 1.9-.4 2.8l2.9 3.9-8.9 6.5c-.8.6-.9 1.6-.4 2.3l16.5 22.7c.5.7 1.6.9 2.3.3l32.1-23.3c.8-.6 1.5-1.7 1.7-2.6l1.5-8.5 2.2-1.6c.9-.6 1.8-2 1.9-3.1l2.2-12.6-6.3-8.5zm-4.7 33.9L18.9 58.9l-14.5-20 7.6-5.5 11.1 15.3c.6.9 1.9 1.1 2.8.4l25.5-18.5-1.2 5.6zm5.4-13.3c0 .2-.4.8-.6.9L25.1 45.5 11 26 40.9 4.3c.2-.1.8-.3 1-.3l11.2 1.6 4.4 6.1-1.9 11.2zM45.7 8.6c-2.7 1.9-3.3 5.7-1.3 8.4s5.7 3.3 8.4 1.3 3.3-5.7 1.3-8.4-5.7-3.3-8.4-1.3zm5.9 3.1c1 1.3.7 3.2-.7 4.2s-3.2.7-4.2-.7c-1-1.3-.7-3.2.7-4.2s3.3-.6 4.2.7z",
      fill: color
    })
  );
};

exports.default = Tags;