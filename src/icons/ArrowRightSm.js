import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowRightSm = ({ color, ...props }) => (
  <Svg viewBox="0 0 63 32" {...props}>
    <Path
      d="M61.5 13.7L48.8 1c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l7.8 7.8H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h49l-7.4 7.4c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l12.7-12.7c.6-.5.9-1.3.9-2.1s-.3-1.5-.9-2.1z"
      fill={color}
    />
  </Svg>
);

export default ArrowRightSm;
