"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Twitter = function Twitter(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 52" }, props),
    _react2.default.createElement("path", {
      d: "M64 6.2c-2.3 1-4.9 1.8-7.5 2.1C59.2 6.6 61.2 4 62.2 1c-2.5 1.5-5.3 2.6-8.4 3.2C51.5 1.6 48.1 0 44.3 0c-7.2 0-13.1 5.9-13.1 13.1 0 1 .1 2 .3 3-10.9-.5-20.6-5.7-27-13.7C3.3 4.3 2.7 6.6 2.7 9c0 4.6 2.3 8.6 5.8 10.9-2.1-.1-4.2-.7-5.9-1.6v.2c0 6.4 4.5 11.7 10.5 12.9-1.1.3-2.3.4-3.5.4-.8 0-1.7-.1-2.5-.2 1.7 5.2 6.5 9 12.3 9.1-4.5 3.5-10.2 5.6-16.3 5.6-1.1 0-2.1-.1-3.1-.2C5.8 49.8 12.7 52 20.1 52c24.1 0 37.3-20 37.3-37.3V13c2.6-1.9 4.8-4.2 6.6-6.8z",
      fill: "#343434"
    })
  );
};

exports.default = Twitter;