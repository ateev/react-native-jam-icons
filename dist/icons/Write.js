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

var Write = function Write(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 65 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M29.6 35.8l-1.1-1.1 23-23L46.8 7 21.2 32.6l-3 13.5 13.5-3 25.5-25.6-4.7-4.7zM62.1 2.2c-2.9-2.9-7.6-2.9-10.4 0l-.3.3 10.4 10.4.3-.3c2.8-2.8 2.8-7.5 0-10.4zM46 57c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V19c0-.6.4-1 1-1h25v-6H2c-1.1 0-2 .9-2 2v48c0 1.1.9 2 2 2h48c1.1 0 2-.9 2-2V32h-6v25z",
      fill: color
    })
  );
};

exports.default = Write;