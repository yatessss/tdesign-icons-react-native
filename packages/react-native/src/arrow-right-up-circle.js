import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowRightUpCircleIcon = (props) => (
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
      d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12ZM12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12.7677 9.81866L8.52509 9.81866V7.81866L16.1819 7.81866V15.4755H14.1819L14.1819 11.2329L8.81798 16.5968L7.40377 15.1826L12.7677 9.81866Z"
      fill="currentColor"
    />
  </Svg>
);
export { ArrowRightUpCircleIcon };

export default ArrowRightUpCircleIcon;
