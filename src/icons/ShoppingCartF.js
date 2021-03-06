import React from "react";
import Svg, { Path } from "react-native-svg";

const ShoppingCartF = ({ color, ...props }) => (
  <Svg viewBox="0 0 60 60" {...props}>
    <Path
      d="M56 8H8V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2s.9 2 2 2h2v42c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2s-.9-2-2-2H8v-4h43.6c2.2 0 4.2-1.8 4.6-4l3.3-24c.3-2.2-1.3-4-3.5-4zM8 54c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6-6 2.7-6 6zm6-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm26 2c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6-6 2.7-6 6zm6-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
      fill={color}
    />
  </Svg>
);

export default ShoppingCartF;
