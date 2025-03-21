import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArchwayIcon = (props) => (
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
      d="M6 2V3H18V2H20V3H21V5H20.2198L20.8198 8H22V10H21V20H22V22H2V20H3V10H2V8H3.1802L3.7802 5H3V3H4V2H6ZM5.8198 5L5.2198 8H18.7802L18.1802 5H5.8198ZM19 10H16V20H19V10ZM14 20V10H10V20H14ZM8 20V10H5V20H8Z"
      fill="currentColor"
    />
  </Svg>
);
export { ArchwayIcon };

export default ArchwayIcon;
