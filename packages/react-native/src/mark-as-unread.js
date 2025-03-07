import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MarkAsUnreadIcon = (props) => (
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
      d="M9.5 1.33984L17.244 5.89511L16.2299 7.61898L9.5 3.66021L2 8.07197V20H0V6.92808L9.5 1.33984ZM4 9.00003H23V23H4V9.00003ZM7.99241 11L13.5 14.7865L19.0076 11H7.99241ZM21 12.0573L13.5 17.2136L6 12.0573V21H21V12.0573Z"
      fill="currentColor"
    />
  </Svg>
);
export { MarkAsUnreadIcon };

export default MarkAsUnreadIcon;
