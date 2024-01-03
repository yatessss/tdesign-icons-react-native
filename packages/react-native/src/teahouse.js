import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TeahouseIcon = (props) => (
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
      d="M8 2V3H16V2H18V3H19V5H18V6.66667L20.5 10H22V12H21V20H22V22H2V20H3V12H2V10H3.5L6 6.66667V5H5V3H6V2H8ZM8 5V6H16V5H8ZM16.5 8H7.5L6 10H18L16.5 8ZM19 12H16V20H19V12ZM14 20V12H10V20H14ZM8 20V12H5V20H8Z"
      fill="currentColor"
    />
  </Svg>
);
export { TeahouseIcon };

export default TeahouseIcon;
