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

var Soundcloud = function Soundcloud(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 34" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M55 14.4h-.4C53.7 6.2 47 0 38.9 0c-2.9 0-7.3 1.4-9.3 2.6L29 3l.9 30.9 26.3.1c4.9 0 7.8-5.1 7.8-10 0-5.1-3.7-9.1-9-9.6zM23 7h2v27h-2zm-6 2h2v24h-2zm-5 1h2v23h-2zm-6 5h2.4v18.5H6zM.1 18.7h2.3v11.1H.1z",
      fill: color
    })
  );
};

exports.default = Soundcloud;