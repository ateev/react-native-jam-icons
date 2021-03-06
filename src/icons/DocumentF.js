import React from "react";
import Svg, { Path } from "react-native-svg";

const DocumentF = ({ color, ...props }) => (
  <Svg viewBox="0 0 48 64" {...props}>
    <Path
      d="M45 0H3C1.3 0 0 1.3 0 3v58c0 1.7 1.3 3 3 3h42c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm-7 52H10c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2zm0-12H10c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2zm0-12H10c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2zm0-12H10c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2z"
      fill={color}
    />
  </Svg>
);

export default DocumentF;
