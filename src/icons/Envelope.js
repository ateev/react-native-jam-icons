import React from "react";
import Svg, { Path } from "react-native-svg";

const Envelope = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 42" {...props}>
    <Path
      d="M60 0H4C1.8 0 0 1.8 0 4v34c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-3.5 4L32 24 7.5 4h49zM4 35.5V6.7l18.1 15L4 35.5zM6.6 38l18.3-13.9 6.3 5.3c.4.4 1.1.4 1.5 0l6.3-5.3L57.4 38H6.6zM60 35.5L41.9 21.7 60 6.7v28.8z"
      fill={color}
    />
  </Svg>
);

export default Envelope;
