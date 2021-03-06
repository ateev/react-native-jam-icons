import React from "react";
import Svg, { Path } from "react-native-svg";

const Wrench = ({ color, ...props }) => (
  <Svg viewBox="0 0 62 62" {...props}>
    <Path
      d="M60.2 11.8L47.7 24.2l-7.4-2.5-2.5-7.4L50.3 1.9c-5.5-2-11.7-1-15.9 3.2C29.9 9.6 29 16.3 31.6 22L2.1 51.5c-2.3 2.3-2.3 6.1 0 8.5 2.3 2.3 6.1 2.3 8.5 0L40 30.6c5.7 2.6 12.5 1.7 16.9-2.8 4.3-4.3 5.3-10.5 3.3-16zm-51.7 46c-1.2 1.2-3.1 1.2-4.2 0s-1.2-3.1 0-4.2c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2z"
      fill={color}
    />
  </Svg>
);

export default Wrench;
