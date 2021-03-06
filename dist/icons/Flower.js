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

var Flower = function Flower(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      className: "st0",
      d: "M52 24c-6.6 0-12 5.4-12 12v7.6c-4-4.3-9.2-7.4-15.1-8.8.1-.2.3-.4.4-.7 2.4.8 5.2.2 7.2-1.7 1.9-1.9 2.5-4.7 1.7-7.2 2.3-1.1 3.9-3.5 3.9-6.3 0-2.7-1.6-5.1-3.9-6.3.8-2.4.2-5.2-1.7-7.2-1.9-1.9-4.7-2.5-7.2-1.7C24.1 1.6 21.7 0 19 0c-2.7 0-5.1 1.6-6.3 3.9-2.4-.8-5.2-.2-7.2 1.7-1.9 1.9-2.5 4.7-1.7 7.2C1.6 13.9 0 16.3 0 19s1.6 5.1 3.9 6.3c-.8 2.4-.2 5.2 1.7 7.2 1.9 1.9 4.7 2.5 7.2 1.7 1.1 2.3 3.5 3.9 6.3 3.9 13.9.5 25 12 25 26h4c0-5.9-1.7-11.4-4.6-16H52c6.6 0 12-5.4 12-12C64 29.4 58.6 24 52 24zm-35.7 8.3l-1.6-3.1-3.3 1.1c-1.1.4-2.3.1-3.1-.7-.8-.8-1.1-2-.7-3.1l1.1-3.3-3.1-1.6C4.7 21.2 4 20.1 4 19s.7-2.2 1.7-2.7l3.1-1.6-1.1-3.3c-.4-1.1-.1-2.3.7-3.1.8-.8 2-1.1 3.1-.7l3.3 1.1 1.6-3.1C16.8 4.7 17.9 4 19 4s2.2.7 2.7 1.7l1.6 3.1 3.3-1.1c1.1-.4 2.3-.1 3.1.7.8.8 1.1 2 .7 3.1l-1.1 3.3 3.1 1.6c1 .5 1.7 1.5 1.7 2.7 0 1.1-.7 2.2-1.7 2.7l-3.1 1.6 1.1 3.3c.4 1.1.1 2.3-.7 3.1-.8.8-2 1.1-3.1.7l-3.3-1.1-1.6 3.1c-.5 1-1.5 1.7-2.7 1.7-1.1-.2-2.2-.9-2.7-1.9zM52 44h-8v-8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"
    }),
    _react2.default.createElement(Circle, { className: "st0", cx: 19, cy: 19, r: 6 })
  );
};

exports.default = Flower;