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

var Ghost = function Ghost(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 48 64" }, props),
    _react2.default.createElement(Circle, { className: "st0", cx: 34, cy: 22, r: 6 }),
    _react2.default.createElement(Circle, { className: "st0", cx: 14, cy: 22, r: 6 }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      className: "st0",
      d: "M24 0C10.7 0 0 10.7 0 24v40l8.1-8 8 8 5.1-5.2L24 56l2.8 2.8L32 64l5.2-5.2L40 56l2.8 2.8L48 64V24C48 10.7 37.3 0 24 0zm20 54.3l-3.9-3.9-8.1 8-8-8-8 8-7.9-8-4.1 4V24C4 13 13 4 24 4s20 9 20 20v30.3z"
    })
  );
};

exports.default = Ghost;