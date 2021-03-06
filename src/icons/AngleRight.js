import React from "react";
import Svg, { Path } from "react-native-svg";

const AngleRight = ({ color, ...props }) => (
  <Svg viewBox="0 0 35 62" {...props}>
    <Path
      d="M33.4 28.9L5.8 1.3C4.6.1 2.7.1 1.6 1.3s-1.2 3.1 0 4.2L27 31 1.6 56.5c-1.2 1.2-1.2 3.1 0 4.2s3.1 1.2 4.2 0l27.6-27.6c1.2-1.2 1.2-3 0-4.2z"
      fill={color}
    />
  </Svg>
);

export default AngleRight;
