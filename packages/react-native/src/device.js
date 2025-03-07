import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DeviceIcon = (props) => (
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
      d="M1 2H23V6H21V4H3V17H12V19H1V2ZM14 8H24V22H14V8ZM16 10V20H22V10H16ZM17.998 16.998H20.002V19.002H17.998V16.998ZM5 20H12V22H5V20Z"
      fill="currentColor"
    />
  </Svg>
);
export { DeviceIcon };

export default DeviceIcon;
