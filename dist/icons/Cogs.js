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

var Cogs = function Cogs(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 65 64" }, props),
    _react2.default.createElement(Circle, { className: "st0", cx: 48, cy: 17, r: 4 }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      className: "st0",
      d: "M56.8 13c-.7-1.7-.7-3.6-.1-5.2-1.6.6-3.4.6-5.1-.1-1.7-.7-3-2-3.7-3.6-.7 1.7-2 3.1-3.9 3.9-1.7.7-3.5.7-5 .1.5 1.6.5 3.3-.2 4.9-.8 1.8-2.2 3.1-3.8 3.8 1.8.7 3.2 2.1 4 4 .7 1.6.7 3.4.2 4.9 1.6-.5 3.3-.5 4.9.2 1.7.7 3.1 2.1 3.7 3.8.7-1.7 2.1-3.1 3.9-3.8 1.7-.7 3.5-.7 5.1-.1-.6-1.6-.6-3.5.1-5.2.7-1.7 2-2.9 3.6-3.6-1.7-.9-3-2.2-3.7-4zM48 24c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      className: "st1",
      d: "M64 14.4c-1.8.3-3.7-.7-4.4-2.5-.8-1.8-.1-3.8 1.4-4.9-.9-1.3-2.1-2.5-3.4-3.5-1.1 1.5-3.1 2.2-4.9 1.4C51 4.2 50 2.2 50.4.4 48.7.1 47 .1 45.3.3c.5 2-.5 4.1-2.4 4.9-1.9.8-4.1 0-5.1-1.8-1.3.9-2.4 2.1-3.4 3.4 1.7 1 2.4 3.1 1.6 5-.8 1.9-2.8 2.8-4.7 2.3-.3 1.8-.3 3.5 0 5.3 2-.5 4.1.5 4.8 2.5.7 1.9.1 3.9-1.6 5 1 1.2 2.1 2.3 3.4 3.2 1-1.6 3.1-2.2 4.9-1.5 1.8.7 2.7 2.6 2.4 4.4 1.7.2 3.4.2 5 0-.3-1.8.8-3.7 2.5-4.4 1.7-.7 3.7-.1 4.8 1.2 1.2-.9 2.4-2.1 3.3-3.4-1.4-1.1-2-3-1.3-4.7.7-1.7 2.5-2.7 4.3-2.4.4-1.6.4-3.3.2-4.9zm-7.1 6.1c-.7 1.7-.7 3.5-.1 5.2-1.6-.6-3.4-.6-5.1.1-1.8.7-3.2 2.1-3.9 3.8-.7-1.7-2-3-3.7-3.8-1.6-.7-3.4-.7-4.9-.2.5-1.6.5-3.3-.2-4.9-.8-1.9-2.2-3.3-4-4 1.7-.7 3.1-2 3.8-3.8.7-1.6.7-3.3.2-4.9 1.6.6 3.4.6 5-.1 1.8-.7 3.2-2.2 3.9-3.9.7 1.6 2 2.9 3.7 3.6 1.7.7 3.5.7 5.1.1-.6 1.6-.6 3.5.1 5.2.7 1.8 2.1 3.1 3.7 3.8-1.6.9-2.9 2.1-3.6 3.8zM48 10c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
    }),
    _react2.default.createElement(Circle, { className: "st0", cx: 21, cy: 44, r: 6 }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      className: "st0",
      d: "M36.9 37.4c-2.3.2-4.7-.6-6.4-2.4-1.9-1.9-3-4.8-2.5-7.4-1.4 2.1-4.3 3.3-7 3.3-2.9 0-5.4-1.5-6.8-3.8.7 2.7 0 5.7-2.1 7.9-2.1 2.1-5.1 2.8-7.9 2.1C6.5 38.6 8 41.1 8 44c0 2.7-1.2 5.6-3.3 7 2.6-.5 5.4.6 7.4 2.5 1.7 1.7 2.6 4.1 2.5 6.4.2-.3.4-.5.7-.7 1.5-1.4 3.7-2.2 5.8-2.2 2.4 0 5.1.8 6.6 2.5 0-2.1 1.4-4.4 2.9-6 1.6-1.6 3.9-2.9 6-2.9-1.8-1.5-2.6-4.2-2.6-6.6 0-2.5 1.1-5.1 2.9-6.6zM21 53c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M37 44c0-2.3 1.5-4.2 3.6-4.8-.4-1.9-1.1-3.7-1.9-5.3-1.9 1-4.4.7-6-1-1.7-1.7-2-4.4-.7-6.4-1.8-1.2-3.8-2.2-6-2.8-.4 2.4-2.5 4.3-5 4.3-2.6 0-4.7-2-5-4.5-2.1.5-4.1 1.3-5.9 2.3 1.8 2 1.8 5.2-.2 7.1s-5.1 2-7.1.2C1.8 34.9 1 36.9.5 39 3 39.3 5 41.4 5 44c0 2.5-1.9 4.6-4.3 4.9.6 2.2 1.5 4.2 2.8 6 2-1.3 4.7-1.1 6.4.7 1.6 1.6 1.9 4 1 6 1.7.9 3.4 1.5 5.3 1.9.6-2.1 2.5-3.6 4.8-3.6 2.2 0 4 1.4 4.7 3.3 2-.5 3.9-1.4 5.7-2.5-.6-1.8-.2-3.8 1.3-5.2s3.4-1.8 5.2-1.3c1.1-1.7 1.9-3.6 2.5-5.7-2-.5-3.4-2.3-3.4-4.5zm-.5 6.6c-2.1 0-4.4 1.4-6 2.9-1.6 1.6-2.9 3.9-2.9 6-1.5-1.7-4.2-2.5-6.6-2.5-2.2 0-4.3.8-5.8 2.2l-.7.7c.2-2.3-.7-4.7-2.5-6.4-1.9-1.9-4.8-3-7.4-2.5C6.8 49.6 8 46.7 8 44c0-2.9-1.5-5.4-3.8-6.8 2.7.7 5.7 0 7.9-2.1 2.1-2.1 2.8-5.1 2.1-7.9 1.4 2.3 4 3.8 6.8 3.8 2.7 0 5.6-1.2 7-3.3-.5 2.6.5 5.4 2.5 7.4 1.7 1.7 4.1 2.5 6.4 2.4-1.8 1.4-2.9 4-2.9 6.5 0 2.4.8 5.1 2.5 6.6z",
      fill: color
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      className: "st1",
      d: "M21 35c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 15c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
    })
  );
};

exports.default = Cogs;