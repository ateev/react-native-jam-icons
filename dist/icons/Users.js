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

var Users = function Users(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M60.5 27.1s-3.1-2.1-8.3-3.3C55.7 21.5 58 17.5 58 13c0-7.2-5.8-13-13-13S32 5.8 32 13c0 4.5 2.3 8.5 5.8 10.8-2.5.6-4.5 1.3-5.9 2C31.3 19.2 25.8 14 19 14c-7.2 0-13 5.8-13 13 0 4.5 2.3 8.5 5.8 10.8-5.2 1.2-8.3 3.3-8.3 3.3C1.6 42.2 0 44.8 0 47v13c0 2.2 1.8 4 4 4h30c2.2 0 4-1.8 4-4V50h22c2.2 0 4-1.8 4-4V33c0-2.2-1.5-4.9-3.5-5.9zM36 13c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9zM10 27c0-5 4-9 9-9s9 4 9 9l-.1 1.6-.2.9v.2c-.1.3-.2.7-.4 1l-.1.3c-.1.2-.2.5-.4.7l-.2.3c-.1.2-.3.5-.5.7-1.6 1.9-4.2 3.3-7.1 3.3-5 0-9-4-9-9zm24 23v10H4V47c0-.7.8-2 1.4-2.4l.2-.1.2-.1.1-.1c.1-.1.4-.2.6-.3.7-.4 1.6-.8 2.6-1.2a27.577 27.577 0 0 1 19.6 0c1 .4 1.9.8 2.6 1.2.2.1.5.3.6.4l.1.1.2.1.2.1c.8.3 1.6 1.5 1.6 2.3v3zm22.8-4h-19c-.4-2-1.7-4-3.4-4.9 0 0-1.6-1.1-4.5-2.1v-5.1l.3-.5c.6-.8 1-1.6 1.2-2.6.4-.4.8-.7 1.3-.9 0 0 4.8-2.9 12.2-2.9 7.4 0 12.2 2.9 12.2 2.9 1.6.7 2.8 2.6 2.8 4.2v9.1h.1c0 1.6-1.4 2.8-3.2 2.8z",
      fill: color
    })
  );
};

exports.default = Users;