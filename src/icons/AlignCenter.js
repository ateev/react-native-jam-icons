import React from "react";
import Svg, { Path } from "react-native-svg";

const AlignCenter = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 48" {...props}>
    <Path
      d="M61 0H3C1.3 0 0 1.3 0 3s1.3 3 3 3h58c1.7 0 3-1.3 3-3s-1.3-3-3-3zm-4 28H7c-1.7 0-3 1.3-3 3s1.3 3 3 3h50c1.7 0 3-1.3 3-3s-1.3-3-3-3zm-7-8c1.7 0 3-1.3 3-3s-1.3-3-3-3H14c-1.7 0-3 1.3-3 3s1.3 3 3 3h36zm-8 22H22c-1.7 0-3 1.3-3 3s1.3 3 3 3h20c1.7 0 3-1.3 3-3s-1.3-3-3-3z"
      fill={color}
    />
  </Svg>
);

export default AlignCenter;
