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

var Key = function Key(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 58 62" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M52.7 5.9c-7-7-18.4-7-25.5 0-6.3 6.3-6.9 16.1-1.9 23.2l-.2.2-24 24c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l2.8 2.8c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1 0-4.2l-2.8-2.8 2.8-2.8 4.2 4.2c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1 0-4.2l-4.2-4.2 12.7-12.7.2-.2c7 5 16.9 4.4 23.2-1.9 7.1-7.2 7.1-18.6.1-25.6zm-3.6 21.9c-5.1 5.1-13.3 5.1-18.4 0-5.1-5.1-5.1-13.3 0-18.4 5.1-5.1 13.3-5.1 18.4 0 5.1 5.1 5.1 13.3 0 18.4z",
      fill: color
    })
  );
};

exports.default = Key;