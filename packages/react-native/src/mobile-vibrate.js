import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MobileVibrateIcon = (props) => (
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
      d="M5 1H19V23H5V1ZM7 3V21H17V3H7ZM4 5L4 19H2L2 5H4ZM22 5V19H20V5H22ZM11 17H13.0039V19.0039H11V17Z"
      fill="currentColor"
    />
  </Svg>
);
export { MobileVibrateIcon };

export default MobileVibrateIcon;
