import React from "react";
import Svg, { Path } from "react-native-svg";

const ForwardF = ({ color, ...props }) => (
  <Svg viewBox="0 0 66 52" {...props}>
    <Path
      d="M64.1 24.5L27.8.7c-1.4-.9-2.5-.3-2.5 1.4v13L3.4.7C2.1-.2.9.4.9 2.1v48.1c0 1.7 1.1 2.3 2.5 1.4l21.9-14.3v13c0 1.7 1.1 2.3 2.5 1.4l36.3-23.8c1.4-1 1.4-2.5 0-3.4z"
      fill={color}
    />
  </Svg>
);

export default ForwardF;
