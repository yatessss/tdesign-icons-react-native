import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ShopIcon = (props) => (
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
      d="M7.5 5.5C7.5 3.01472 9.51472 1 12 1C14.4853 1 16.5 3.01472 16.5 5.5V7H21V23H3V7H7.5V5.5ZM7.5 9H5V21H19V9H16.5V12H14.5V9H9.5V12H7.5V9ZM14.5 7V5.5C14.5 4.11929 13.3807 3 12 3C10.6193 3 9.5 4.11929 9.5 5.5V7H14.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { ShopIcon };

export default ShopIcon;
