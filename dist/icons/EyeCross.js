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

var EyeCross = function EyeCross(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 60" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M47.8 17.8L61.4 4.2c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L43.5 16.5c-3.7-1-7.6-1.5-11.5-1.5-16 0-32 9.1-32 16.7 0 4.9 6.6 9.8 15.6 12.7L3.4 56.6c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0L20 45.6c3.8.9 7.9 1.4 12 1.4 16 0 32-7.7 32-15.3 0-5-6.9-10.6-16.2-13.9zm-5.8 13c0 5.3-4.5 9.6-10 9.6-2 0-3.8-.6-5.3-1.5l3.8-3.8c.5.1 1 .2 1.5.2 2.8 0 5-2.2 5-4.9 0-.6-.1-1.1-.3-1.6l3.5-3.5c1.2 1.6 1.8 3.5 1.8 5.5zm-20 0c0-5.3 4.5-9.6 10-9.6.4 0 .9 0 1.3.1-.8.5-1.3 1.4-1.3 2.4 0 .8.3 1.5.8 2-.3 0-.6-.1-.8-.1-2.8 0-5 2.2-5 4.9 0 .7.2 1.4.5 2l-3.7 3.7c-1.2-1.5-1.8-3.4-1.8-5.4zm13-9c.9 0 1.6.5 1.9 1.3l-2.4 2.4c-.8-.2-1.4-1-1.4-1.8-.1-1 .8-1.9 1.9-1.9zm4.5-1.3c-.6-.4-1.3-.8-2-1.1.9.1 1.8.3 2.7.5l-.7.6zM11.7 38.6c-5-2.4-7.7-5.2-7.7-6.9 0-1.8 2.9-5 7.9-7.7 4.3-2.3 9.5-4 14.7-4.7-4.5 2-7.6 6.4-7.6 11.5 0 2.8 1 5.4 2.6 7.5l-2.8 2.8c-2.5-.6-4.9-1.5-7.1-2.5zm12.8 2.5c1 .7 2.1 1.3 3.3 1.7-1.5-.1-3-.3-4.4-.6l1.1-1.1zm27.8-2.5c-4.6 2.2-10.3 3.7-16.1 4.2 5.1-1.7 8.8-6.4 8.8-12 0-2.8-1-5.5-2.6-7.6l2.3-2.3c2.6.8 5.2 1.8 7.4 3.1 5 2.7 7.9 5.9 7.9 7.7 0 1.7-2.7 4.5-7.7 6.9z",
      fill: color
    })
  );
};

exports.default = EyeCross;