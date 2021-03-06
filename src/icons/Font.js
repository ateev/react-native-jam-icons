import React from "react";
import Svg, { Path } from "react-native-svg";

const Font = ({ color, ...props }) => (
  <Svg viewBox="0 0 63 64" {...props}>
    <Path
      d="M59.1 60.1c-1.2-.3-2.4-.6-3.6-.8L32.8.9h-2.6L7.4 59.3c-2.2.5-4.3 1.2-6.5 2.1V64h20v-2.6c-2.6-1.1-5.2-1.8-7.7-2.1l5.9-16.2h21.5l6.1 16.2c-1.2.2-2.4.5-3.7.9-1.3.4-2.5.8-3.7 1.2V64h23v-2.6c-.9-.6-2-1-3.2-1.3zM20.9 38.5l6.9-18.6 2.2-7.8h.2l1.7 7.6L39 38.5H20.9z"
      fill={color}
    />
  </Svg>
);

export default Font;
