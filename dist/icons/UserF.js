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

var UserF = function UserF(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 50 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M46.5 35s-5.2-3.4-12.8-5.1c4.5-2.8 7.4-7.8 7.4-13.5 0-8.8-7.1-16-15.9-16S9.4 7.5 9.4 16.4c0 5.7 3 10.7 7.4 13.5C8.7 31.6 3.5 35 3.5 35 1.6 36.1 0 38.8 0 41v19c0 2.2 1.8 4 4 4h42c2.2 0 4-1.8 4-4V41c0-2.2-1.5-4.9-3.5-6z",
      fill: color
    })
  );
};

exports.default = UserF;