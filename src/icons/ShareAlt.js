import React from "react";
import Svg, { Path } from "react-native-svg";

const ShareAlt = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M54 44c-3.3 0-6.2 1.6-8 4L19.7 34.6c.2-.8.3-1.7.3-2.6 0-.6 0-1.1-.1-1.7l26.7-13.6c1.8 2 4.5 3.3 7.4 3.3 5.5 0 10-4.5 10-10S59.5 0 54 0 44 4.5 44 10c0 .4 0 .8.1 1.2L17.1 25c-1.8-1.8-4.3-3-7.1-3-5.5 0-10 4.5-10 10s4.5 10 10 10c2.5 0 4.7-.9 6.4-2.4l27.6 14v.3c0 5.5 4.5 10 10 10s10-4.5 10-10c0-5.4-4.5-9.9-10-9.9z"
      fill={color}
    />
  </Svg>
);

export default ShareAlt;
