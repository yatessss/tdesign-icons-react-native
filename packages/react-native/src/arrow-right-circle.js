import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRightCircleIcon = (props) => (
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
      d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM6.5 13L14.0858 13L11.0858 16L12.5 17.4142L17.9142 12L12.5 6.58579L11.0858 8L14.0858 11L6.5 11V13Z"
      fill="currentColor"
    />
  </Svg>
);
export { ArrowRightCircleIcon };

export default ArrowRightCircleIcon;
