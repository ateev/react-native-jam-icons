import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowDownLeft = ({ color, ...props }) => (
  <Svg viewBox="0 0 63 63" {...props}>
    <Path
      d="M61.9.9c-1.2-1.2-3.1-1.2-4.2 0L6 52.5V18c0-1.7-1.3-3-3-3s-3 1.3-3 3v42c0 1.7 1.3 3 3 3h42c1.7 0 3-1.3 3-3s-1.3-3-3-3H10L61.9 5.1c1.2-1.1 1.2-3 0-4.2z"
      fill={color}
    />
  </Svg>
);

export default ArrowDownLeft;
