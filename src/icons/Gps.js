import React from "react";
import Svg, { Path } from "react-native-svg";

const Gps = ({ color, ...props }) => (
  <Svg viewBox="0 0 58 58" {...props}>
    <Path
      d="M54.6.8L2.4 24.9c-2.5 1.2-2.4 2.7.3 3.5l20.8 6 6 20.8c.8 2.7 2.3 2.8 3.5.3L57 3.2c1.2-2.5.1-3.6-2.4-2.4zM31.7 48.5l-5-17.4-17.4-5L50.9 6.9 31.7 48.5z"
      fill={color}
    />
  </Svg>
);

export default Gps;
