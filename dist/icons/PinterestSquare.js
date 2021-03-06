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

var PinterestSquare = function PinterestSquare(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return _react2.default.createElement(
    _reactNativeSvg2.default,
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: "M0 4c0-2.2 1.8-4 4-4h56c2.2 0 4 1.8 4 4v56c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4zm50.8 17.3C49.5 11.9 40.1 7 30.1 8.2c-7.9.9-15.7 7.3-16.1 16.5-.2 5.6 1.4 9.8 6.7 11 2.3-4.1-.7-5-1.2-8-1.9-12.2 13.9-20.4 22.2-12 5.7 5.9 2 24-7.3 22.1-8.9-1.8 4.3-16.2-2.7-19-5.7-2.3-8.8 7-6.1 11.6-1.6 8-5 15.5-3.6 25.5 4.5-3.3 6-9.7 7.3-16.3 2.3 1.4 3.5 2.8 6.4 3.1 10.6.9 16.5-10.6 15.1-21.4z",
      fill: color
    })
  );
};

exports.default = PinterestSquare;