import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RootListIcon = (props) => (
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
      d="M2 2H22V22L2 22V2ZM4 4V20L20 20V4H4ZM6 7.5L18 7.5V9.5L6 9.5V7.5ZM6 11.5L14 11.5V13.5L6 13.5L6 11.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { RootListIcon };

export default RootListIcon;
