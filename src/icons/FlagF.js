import React from "react";
import Svg, { Path } from "react-native-svg";

const FlagF = ({ color, ...props }) => (
  <Svg viewBox="0 0 47 64" {...props}>
    <Path
      d="M36.8 20l8.9-12.7C47 5.5 46.2 4 44 4H4V2c0-1.1-.9-2-2-2S0 .9 0 2v60c0 1.1.9 2 2 2s2-.9 2-2V36h40c2.2 0 3-1.5 1.7-3.3L36.8 20z"
      fill={color}
    />
  </Svg>
);

export default FlagF;
