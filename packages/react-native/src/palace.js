import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PalaceIcon = (props) => (
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
      d="M13 2V3.12602C14.7252 3.57006 16 5.13616 16 7H19V9H18V10H22V12H21V20H22V22H2V20H3V12H2V10H6V9H5V7H8C8 5.13616 9.27477 3.57006 11 3.12602V2H13ZM8 9V10H16V9H8ZM14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7H14ZM5 12V20H8V18C8 15.7909 9.79086 14 12 14C14.2091 14 16 15.7909 16 18V20H19V12H5ZM14 20V18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18V20H14Z"
      fill="currentColor"
    />
  </Svg>
);
export { PalaceIcon };

export default PalaceIcon;
