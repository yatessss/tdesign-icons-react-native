import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const IconIcon = (props) => (
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
      d="M22 2H8V7.15003C4.57664 7.84493 2 10.8716 2 14.5C2 18.6421 5.35786 22 9.5 22C13.1284 22 16.1551 19.4234 16.85 16H22V2ZM16.9836 14C16.7372 10.2562 13.7438 7.26282 10 7.0164V4H20V14H16.9836ZM9.5 9C12.5376 9 15 11.4624 15 14.5C15 17.5376 12.5376 20 9.5 20C6.46243 20 4 17.5376 4 14.5C4 11.4624 6.46243 9 9.5 9Z"
      fill="currentColor"
    />
  </Svg>
);
export { IconIcon };

export default IconIcon;
