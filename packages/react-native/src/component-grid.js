import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ComponentGridIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <Path
      d="M2 2H22V22H2V2ZM4 4V8L8 8V4H4ZM10 4V8H14V4H10ZM16 4V8L20 8V4H16ZM20 10L16 10V14H20V10ZM20 16H16V20H20V16ZM14 20V16L10 16V20H14ZM8 20V16H4V20H8ZM4 14H8V10L4 10V14ZM10 10V14L14 14V10H10Z"
      fill="currentColor"
    />
  </Svg>
);
export { ComponentGridIcon };

export default ComponentGridIcon;
