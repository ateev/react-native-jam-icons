import React from "react";
import Svg, { Path } from "react-native-svg";

const Power = ({ color, ...props }) => (
  <Svg viewBox="0 0 56 64" {...props}>
    <Path
      d="M28 35c1.7 0 3-1.3 3-3V3c0-1.6-1.3-3-3-3s-3 1.3-3 3v29c0 1.6 1.3 3 3 3zm6-26.4V14c9.7 2.6 16.8 11.5 16.8 22 0 12.6-10.2 22.8-22.8 22.8S5.2 48.6 5.2 36c0-10.5 7.1-19.3 16.8-22V8.6C9.4 11.4 0 22.6 0 36c0 15.5 12.5 28 28 28s28-12.5 28-28c0-13.4-9.4-24.6-22-27.4z"
      fill={color}
    />
  </Svg>
);

export default Power;
