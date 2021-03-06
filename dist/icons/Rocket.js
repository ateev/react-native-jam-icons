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

var Rocket = function Rocket(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 54 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M27 20c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm15.5 3c.1-7.2-.3-15-1.7-21.2C37.8 2.2 27 0 27 0S16.1 2.2 13.2 14.8c-1.5 6.3-1.8 14-1.7 21.3C6.8 38.6 2.9 42.3 0 46.8V56h12.8c.2 1.9.4 3 .4 3H15v5h24v-5h1.7s.2-1.1.4-3H54v-9.2c-2.9-4.5-6.8-8.2-11.5-10.8zM3 53v-5.3c2.2-3.2 5-6 8.3-8.1.1 3.3.3 6.7.6 10 .1 1.2.2 2.3.3 3.4H3zM21.8 6c1.3-1.1 2.7-1.9 4.1-2.5.4-.2.8-.3 1.1-.4.3.1.7.2 1.1.4 1.4.6 2.8 1.4 4.1 2.5 1.5 1.4 2.8 3 3.8 4.9-2.6 1.4-5.7 2.1-9 2.1s-6.5-.8-9-2.2c1-1.9 2.3-3.5 3.8-4.8zM36 61H18v-2h18v2zm2.6-9.9c-.2 1.8-.3 3.4-.5 5h-.4V56H29V42c0-1.1-.9-2-2-2s-2 .9-2 2v14h-9.2c-.2-1.5-.4-3.2-.5-5-.7-7-1-14-.8-20.6.1-5.8.7-10.9 1.6-15 .2-.7.3-1.3.5-1.9 3 1.6 6.6 2.5 10.4 2.5s7.4-.9 10.3-2.4c.2.6.4 1.2.5 1.9 1 4.1 1.5 9.2 1.6 15 .2 6.6-.2 13.6-.8 20.6zM51 53h-9.3c.1-1.1.2-2.2.3-3.4.3-3.3.5-6.7.6-10 3.3 2.1 6.1 4.9 8.4 8.1V53z",
      fill: color
    })
  );
};

exports.default = Rocket;