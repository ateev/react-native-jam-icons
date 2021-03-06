import React from "react";
import Svg, { Path } from "react-native-svg";

const IdCard = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 42" {...props}>
    <Path
      d="M59 0H5C2.2 0 0 2.2 0 5v32c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm1 37c0 .6-.4 1-1 1H5c-.5 0-1-.4-1-1V5c0-.6.4-1 1-1h54c.5 0 1 .4 1 1v32zM21 10H10c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm33 0H29c-1.1 0-2 .9-2 2s.9 2 2 2h25c1.1 0 2-.9 2-2s-.9-2-2-2zm0 6H29c-1.1 0-2 .9-2 2s.9 2 2 2h25c1.1 0 2-.9 2-2s-.9-2-2-2zm-21 6h-4c-1.1 0-2 .9-2 2s.9 2 2 2h4c1.1 0 2-.9 2-2s-.9-2-2-2zm10 0h-4c-1.1 0-2 .9-2 2s.9 2 2 2h4c1.1 0 2-.9 2-2s-.9-2-2-2z"
      fill={color}
    />
  </Svg>
);

export default IdCard;
