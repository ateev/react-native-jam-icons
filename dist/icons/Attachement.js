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

var Attachement = function Attachement(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 51 56" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M22.8 48.8c-4.3 4.3-11.3 4.3-15.6 0-4.3-4.3-4.3-11.3 0-15.6L21 19.5 33.7 6.7c2.9-2.9 7.7-2.9 10.6 0 2.9 2.9 2.9 7.7 0 10.6L30.5 31.1l-12 12c-1.6 1.6-4.1 1.6-5.7 0-1.6-1.6-1.6-4.1 0-5.7L33.4 17l-2.8-2.8L10 34.7c-3.1 3.1-3.1 8.2 0 11.3 3.1 3.1 8.2 3.1 11.3 0l12-12 13.8-13.8c4.5-4.5 4.5-11.8 0-16.3s-11.8-4.5-16.3 0L18.2 16.6 4.4 30.4c-5.9 5.9-5.9 15.4 0 21.2 5.9 5.9 15.4 5.9 21.2 0l23.3-23.3-2.8-2.8-23.3 23.3z",
      fill: color
    })
  );
};

exports.default = Attachement;