import React from "react";
import Svg, { Path } from "react-native-svg";

const MoonF = ({ color, ...props }) => (
  <Svg viewBox="0 0 65 61" {...props}>
    <Path
      d="M48 40C29.6 40 15 25.4 15 8c0-2.5.3-4.9.8-7.3C6.3 6.5 0 16.9 0 29c0 17.4 14.6 32 33 32 15.3 0 28.3-11.1 31.3-25.6C59.5 38.3 53.9 40 48 40z"
      fill={color}
    />
  </Svg>
);

export default MoonF;
