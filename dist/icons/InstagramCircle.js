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

var InstagramCircle = function InstagramCircle(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      className: "st0",
      d: "M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm20 40.1C52 46.7 46.7 52 40.1 52H23.9c-6.5 0-11.7-5.2-11.9-11.6V23.6c.2-6.5 5.5-11.6 11.9-11.6h16.2C46.7 12 52 17.3 52 23.9v16.2zM40.1 16H23.9c-4.4 0-7.9 3.5-7.9 7.9v16.2c0 4.4 3.5 7.9 7.9 7.9h16.2c4.4 0 7.9-3.5 7.9-7.9V23.9c0-4.3-3.6-7.9-7.9-7.9zm-7.6 27C26.7 43 22 38.3 22 32.5S26.7 22 32.5 22 43 26.7 43 32.5 38.3 43 32.5 43zm10-19c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"
    }),
    _react2.default.createElement(Circle, { className: "st0", cx: 32.5, cy: 32.5, r: 6.4 })
  );
};

exports.default = InstagramCircle;