import React from "react";
import Svg, { Path } from "react-native-svg";

const ShieldErrorF = ({ color, ...props }) => (
  <Svg viewBox="0 0 54 64" {...props}>
    <Path
      d="M27 0L0 8v20c.3 16.5 27 36 27 36s26.7-19.5 27-36V8L27 0zm10.5 40.1l-1.4 1.4c-.4.4-1 .4-1.4 0l-7.8-7.8-7.8 7.8c-.4.4-1 .4-1.4 0l-1.4-1.4c-.4-.4-.4-1 0-1.4l7.8-7.8-7.8-7.8c-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0l7.8 7.8 7.8-7.8c.4-.4 1-.4 1.4 0l1.4 1.4c.4.4.4 1 0 1.4l-7.8 7.8 7.8 7.8c.4.4.4 1 0 1.4z"
      fill={color}
    />
  </Svg>
);

export default ShieldErrorF;
