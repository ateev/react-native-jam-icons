import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeF = ({ color, ...props }) => (
  <Svg viewBox="0 0 54 64" {...props}>
    <Path
      d="M52.5 20.8L27.6 0l-26 20.8C.7 21.5 0 22.9 0 24v38c0 1.1.9 2 2 2h16V45c0-5 4-9 9-9s9 4 9 9v19h16c1.1 0 2-.9 2-2V24c0-1.1-.7-2.5-1.5-3.2z"
      fill={color}
    />
  </Svg>
);

export default HomeF;
