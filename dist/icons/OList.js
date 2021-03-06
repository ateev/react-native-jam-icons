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

var OList = function OList(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 41" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M15 7h46c1.7 0 3-1.3 3-3s-1.3-3-3-3H15c-1.7 0-3 1.3-3 3s1.3 3 3 3zm46 10H15c-1.7 0-3 1.3-3 3s1.3 3 3 3h46c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0 16H15c-1.7 0-3 1.3-3 3s1.3 3 3 3h46c1.7 0 3-1.3 3-3s-1.3-3-3-3zM5.7 6.9H4.2V.4h-1c-.5.3-1.1.4-1.8.6v.9h1.4v5H1.1V8h4.6V6.9zm-3 16c1.5-1.6 2.8-3 2.8-4.3 0-1.4-.9-2.3-2.4-2.3-1 0-1.7.4-2.4 1.2l.8.8c.4-.5.9-.9 1.5-.9.8 0 1.3.5 1.3 1.3 0 1.2-1.3 2.5-3.5 4.6v.7H6v-1.2H3.9l-1.2.1zM4.2 36c.8-.4 1.3-.9 1.3-1.8 0-1.3-1-2-2.5-2-.9 0-1.6.4-2.3 1l.7.8c.5-.4.9-.7 1.5-.7.7 0 1.1.4 1.1 1 0 .7-.5 1.2-2 1.2v1c1.7 0 2.2.5 2.2 1.3 0 .7-.6 1.2-1.4 1.2s-1.4-.4-1.8-.8l-.7.9c.5.6 1.4 1.1 2.6 1.1 1.5 0 2.7-.8 2.7-2.2.1-1.1-.5-1.7-1.4-2z",
      fill: color
    })
  );
};

exports.default = OList;