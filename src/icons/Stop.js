import React from "react";
import Svg, { Path } from "react-native-svg";

const Stop = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 64" {...props}>
    <Path
      d="M60 0H4C1.8 0 0 1.8 0 4v56c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-2 58H6V6h52v52z"
      fill={color}
    />
  </Svg>
);

export default Stop;
