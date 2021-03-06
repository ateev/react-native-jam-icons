import React from "react";
import Svg, { Path } from "react-native-svg";

const IceCreamF = ({ color, ...props }) => (
  <Svg viewBox="0 0 32 64" {...props}>
    <Path
      d="M16 0C7.2 0 0 7.2 0 16v32h13v13c0 1.6 1.3 3 3 3s3-1.3 3-3V48h13V16c0-8.8-7.2-16-16-16z"
      fill={color}
    />
  </Svg>
);

export default IceCreamF;
