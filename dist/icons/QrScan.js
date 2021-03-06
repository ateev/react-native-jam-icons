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

var QrScan = function QrScan(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M4 51V40H0v12c0 6.6 5.4 12 12 12h12v-4H13c-5 0-9-4-9-9zM0 12v12h4V13c0-5 4-9 9-9h11V0H12C5.4 0 0 5.4 0 12zM52 0H40v4h11c5 0 9 4 9 9v11h4V12c0-6.6-5.4-12-12-12zm8 51c0 5-4 9-9 9H40v4h12c6.6 0 12-5.4 12-12V40h-4v11z",
      fill: color
    })
  );
};

exports.default = QrScan;