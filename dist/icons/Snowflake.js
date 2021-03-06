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

var Snowflake = function Snowflake(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M62 30h-6.8l2.2-2.2c.8-.8.8-2.1 0-2.8-.8-.8-2.1-.8-2.8 0l-5.1 5h-9.8c-.2-.8-.5-1.5-.9-2.1l10.1-10.1c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L36 25.1c-.6-.4-1.3-.6-2-.8v-9.8l5.1-5.1c.8-.8.8-2 0-2.8-.8-.8-2.1-.8-2.8 0L34 8.8V2c0-1.1-.9-2-2-2s-2 .9-2 2v6.8l-2.2-2.2c-.8-.8-2-.8-2.8 0-.8.8-.8 2.1 0 2.8l5.1 5.1v9.8c-.7.2-1.4.5-2.1.9L17.8 15c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l10.1 10.1c-.4.6-.7 1.3-.9 2.1h-9.8l-5.1-5.1c-.8-.8-2-.8-2.8 0-.8.8-.8 2.1 0 2.8L8.8 30H2c-1.1 0-2 .9-2 2s.9 2 2 2h6.8l-2.2 2.2c-.8.8-.8 2 0 2.8.8.8 2.1.8 2.8 0l5.1-5.1h9.8c.2.7.5 1.4.8 2L15 46.1c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l10.1-10.1c.7.4 1.4.7 2.1.9v9.8l-5.1 5.1c-.8.8-.8 2.1 0 2.8.8.8 2.1.8 2.8 0l2.2-2.2V62c0 1.1.9 2 2 2s2-.9 2-2v-6.8l2.2 2.2c.8.8 2.1.8 2.8 0 .8-.8.8-2.1 0-2.8L34 49.5v-9.8c.7-.2 1.4-.5 2.1-.9l10 10c.8.8 2 .8 2.8 0 .8-.8.8-2 0-2.8l-10-10c.4-.6.7-1.3.9-2.1h9.8l5.1 5.1c.8.8 2.1.8 2.8 0 .8-.8.8-2.1 0-2.8L55.2 34H62c1.1 0 2-.9 2-2s-.9-2-2-2zm-30 7c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z",
      fill: color
    })
  );
};

exports.default = Snowflake;