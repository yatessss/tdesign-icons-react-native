import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HourglassIcon = (props) => (
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
      d="M4 2H20V5C20 8.01203 18.3354 10.6353 15.876 12C18.3354 13.3647 20 15.988 20 19V22H4V19C4 15.988 5.66458 13.3647 8.12399 12C5.66458 10.6353 4 8.01203 4 5V2ZM12 13C8.68629 13 6 15.6863 6 19V20H18V19C18 15.6863 15.3137 13 12 13ZM6 4V5C6 8.31371 8.68629 11 12 11C15.3137 11 18 8.31371 18 5V4H6Z"
      fill="currentColor"
    />
  </Svg>
);
export { HourglassIcon };

export default HourglassIcon;
