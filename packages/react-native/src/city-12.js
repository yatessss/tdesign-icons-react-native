import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const City12Icon = (props) => (
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
      d="M10 2H2V22H22V5H14V10H10V2ZM8 12H16V20H13V15H11V20H8V12ZM6 20H4V4H8V10H6V20ZM18 20V10H16V7H20V20H18Z"
      fill="currentColor"
    />
  </Svg>
);
export { City12Icon };

export default City12Icon;
