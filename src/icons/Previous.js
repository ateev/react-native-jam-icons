import React from "react";
import Svg, { Path } from "react-native-svg";

const Previous = ({ color, ...props }) => (
  <Svg viewBox="0 0 40 52" {...props}>
    <Path
      d="M37.1.7L6 21.2V11c0-1.7-1.3-3-3-3s-3 1.3-3 3v30c0 1.7 1.3 3 3 3s3-1.3 3-3V30.4L37.1 51c1.4.9 2.5.3 2.5-1.3V2c0-1.7-1.2-2.3-2.5-1.3zm-3.5 40.8L9.9 25.8l23.7-15.7v31.4z"
      fill={color}
    />
  </Svg>
);

export default Previous;
