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

var ArrowTopSm = function ArrowTopSm(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 32 63" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M30.9 13.9L18.1 1.2C17.5.6 16.8.3 16 .3s-1.5.3-2.1.9L1.1 13.9C0 15.1 0 17 1.2 18.2c1.2 1.2 3.1 1.2 4.2 0l7.8-7.8v49.3c0 1.7 1.3 3 3 3s3-1.3 3-3v-49l7.4 7.4c1.2 1.2 3.1 1.2 4.2 0 1.2-1.1 1.2-3 .1-4.2z",
      fill: color
    })
  );
};

exports.default = ArrowTopSm;