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

var WikipediaSquare = function WikipediaSquare(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M60 0H4C1.8 0 0 1.8 0 4v56c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-7 18.5c0 .2-.1.3-.3.3-1.1 0-1.9.3-2.5.8-.5.5-1 1.2-1.3 2 0 0-7.1 17.7-9.5 23.6-.9 1.9-1.8 1.7-2.6-.1-1-2.2-3.1-7.2-4.6-10.9-1.6 3.7-3.9 8.7-5 10.9-1.1 2-2 1.8-2.7 0-2.5-6.2-7.5-17.3-9.9-23.5-.4-1.1-.8-1.9-1.1-2.2-.3-.3-1-.5-2-.5-.4 0-.6-.1-.6-.3v-.9l.3-.1h9.6l.4.1v.8c0 .2-.4.3-.7.3h-1.3c-.8 0-1.3.3-1.3.8 0 .2.1.6.3 1.1 1.9 5 8.4 20.1 8.4 20.1l.2.1 4.2-9.2c-.5-1.2-.8-2-.8-2l-2.9-6.2s-.6-1.2-.8-1.7c-1.3-2.8-1.3-2.9-2.5-3.1-.4-.1-.6-.1-.6-.3v-1H31v1c0 .2 0 .3-.2.3l-.4.1c-1.4.1-1.2.7-.2 2.7l2.8 6.2 3.1-6.7c.5-1.2.4-1.5.2-1.8-.1-.2-.5-.4-1.4-.5h-.3c-.1 0-.1 0-.2-.1s0-.1 0-.2v-.9h6.9l.1.1v.8c0 .2-.1.3-.3.3-1.1.1-1.4.2-1.8.8-.2.4-.7 1.1-1.1 2l-4 8.2s0 .1-.1.3l4.8 11 .3.1 7.7-19.9c.3-.8.2-1.4-.1-1.7-.4-.3-.6-.5-1.5-.6h-.8c-.1 0-.3 0-.4-.1-.1-.1-.4-.1-.4-.2v-.8l.6-.1H53v.8z",
      fill: color
    })
  );
};

exports.default = WikipediaSquare;