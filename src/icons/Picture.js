import React from "react";
import Svg, { Path } from "react-native-svg";

const Picture = ({ color, ...props }) => (
  <Svg viewBox="0 0 64 48" {...props}>
    <Path
      d="M59 0H5C2.2 0 0 2.2 0 5v38c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM4 5c0-.6.4-1 1-1h54c.6 0 1 .4 1 1v26.5L42.5 19.9l-7.9 12-5.4-6.3L4.6 43.9c-.4-.2-.6-.5-.6-.9V5zm55 39H9.4l19.2-14.3 8.1 9.4 2.3-2-2.4-2.8 6.7-10.2 16.7 11V43c0 .6-.4 1-1 1zM16 24c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zm0-13c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"
      fill={color}
    />
  </Svg>
);

export default Picture;
