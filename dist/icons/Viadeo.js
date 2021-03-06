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

var Viadeo = function Viadeo(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 54 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M43.1 32.5c0-.1-.1-.2-.2-.3l-1.7.9c-.6.3-1.1.5-1.7.7-.6.2-1.2.4-1.8.5v.1c0 .1.1.2.1.2.8 2.1 1.2 4.3 1.2 6.5 0 1.9-.2 3.7-.8 5.5-.8 2.7-2.1 5.1-4.1 7.1-2.9 3-6.4 4.5-10.4 4.9h-1.2v-.1l.6-.5c4.3-3.2 7.6-7.2 10-12 2-4 3-8.2 3.1-12.7 0-2.2-.1-4.3-.5-6.5-.4-2.4-1.1-4.8-2-7.1 0-.1-.1-.2-.2-.3-.1-.4-.1-.5-.1-.6v-.2c-.2-2-.6-4-1.1-5.9-.7-2.6-1.8-5.1-3.3-7.4-1-1.6-2.2-3-3.6-4.3-.1-.1-.3-.2-.4-.4v.2l.3.6c2.5 4.3 4.7 8.8 6.6 13.4.5 1.3 1 2.6 1.5 3.8l.1.3c0 .1 0 .2.1.6 0 .7.1 1.4.1 2 .1 3.5 0 7-.4 10.5l-.6 4.8c-.3 2-.8 4-1.3 5.9-.7 2.4-1.6 4.7-2.8 6.9-1.1 2-2.3 3.8-3.9 5.3-1.5 1.4-3.1 2.6-5 3.3-.2.1-.4.1-.6.1-2.6-.5-4.9-1.6-7-3.2A14 14 0 0 1 7.8 50c-1.2-2.1-1.9-4.4-2.1-6.8-.1-1.4-.1-2.8.1-4.3.2-1.7.6-3.4 1.4-5 1.1-2.4 2.6-4.4 4.5-6.1 1.5-1.3 3.2-2.4 5-3.1 1.2-.5 2.5-.7 3.7-.9 1.1-.1 2.3-.1 3.4-.1 1.5.1 2.9.4 4.2 1 .1 0 .2.1.4.1.1-1 .3-1.9.6-2.7.3-.9.7-1.7 1.1-2.6-.2-.2-.4-.2-.7-.3-1.8-.6-3.7-.9-5.7-1-2.1-.1-4.1 0-6.2.4-2.4.5-4.7 1.4-6.8 2.7-2 1.3-3.7 2.8-5.3 4.6C2.1 30 .3 34.6 0 39.8c-.1 1.5 0 3 .2 4.5.3 2.1.8 4.2 1.6 6.1 1.4 3.2 3.4 5.9 5.9 8.2 1.9 1.7 4 3 6.4 3.9 2.2.8 4.5 1.3 6.9 1.4 2.2.1 4.4 0 6.5-.5 2.9-.6 5.5-1.8 7.9-3.5 1.9-1.4 3.4-3 4.8-4.9 2.7-3.7 4.2-7.8 4.5-12.4.1-1.9 0-3.7-.3-5.6-.3-1.5-.7-3-1.3-4.5zM53.3 7.8c-.5-1.8-1.1-3.5-2.1-5.1-.1-.2-.3-.4-.4-.7l-.3.6c-.6 1.2-1.4 2.3-2.4 3.3-1.5 1.4-3.2 2.5-5.2 3l-.5.1c-1.5.4-2.9 1-4.3 1.8-.9.5-1.7 1.2-2.4 2.1-1.2 1.6-1.8 3.4-1.7 5.4.1 1.6.5 3.2 1.3 4.6 0 .1.1.1.2.2 6.4-1.6 11.1-5.3 14.4-11.1v.4c-.1.5-.3 1-.5 1.5-.5 1-1.2 1.9-1.9 2.8-1.3 1.5-2.8 2.7-4.3 3.9-1.9 1.4-3.8 2.7-5.9 3.9-.1.1-.3.1-.4.3.3.3.5.5.8.7 1 .9 2.2 1.6 3.5 2 1.2.4 2.5.5 3.7.3 1.5-.3 2.9-1 4.1-2 1.1-1 2-2.2 2.8-3.5.4-.8.8-1.5 1.1-2.4.6-1.7.9-3.5 1-5.4.2-2.2 0-4.4-.6-6.7z",
      fill: color
    })
  );
};

exports.default = Viadeo;