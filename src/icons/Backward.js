import React from "react";
import Svg, { Path } from "react-native-svg";

const Backward = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 53" {...props}>
    <Path
      d="M61.4 1.2L45.9 11.3l-3.3 2.2-2.7 1.8V2.5c0-1.7-1.1-2.3-2.5-1.4L1.1 24.9c-1.4.9-1.4 2.4 0 3.3L37.4 52c1.4.9 2.5.3 2.5-1.4V38l2.7 1.8 3.3 2.2 15.5 10c1.4.9 2.5.3 2.5-1.4V2.5c0-1.6-1.1-2.3-2.5-1.3zm-3.5 41.3l-24-15.7v15.7l-24.4-16 24.4-16v15.7l24-15.7v32z"
      fill={color}
    />
  </Svg>
);

export default Backward;
