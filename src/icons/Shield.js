import React from "react";
import Svg, { Path } from "react-native-svg";

const Shield = ({ color, ...props }) => (
  <Svg viewBox="0 0 54 64" {...props}>
    <Path
      d="M27 0L0 8v20c.3 16.5 27 36 27 36s26.7-19.5 27-36V8L27 0zm23 28c-.2 14.3-23 31-23 31S4.2 42.3 4 28V11l23-7 23 7v17z"
      fill={color}
    />
  </Svg>
);

export default Shield;
