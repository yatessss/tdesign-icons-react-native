import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const InstallDesktopIcon = (props) => (
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
      d="M20 2V6.65733L21.5304 5.19136L22.9139 6.63564L19 10.3848L15.0861 6.63565L16.4696 5.19136L18 6.65734V2H20ZM1 3H14V5H3V16H21V12H23V18H1V3ZM5 20H19V22H5V20Z"
      fill="currentColor"
    />
  </Svg>
);
export { InstallDesktopIcon };

export default InstallDesktopIcon;
