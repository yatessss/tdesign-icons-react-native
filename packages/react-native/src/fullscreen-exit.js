import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FullscreenExitIcon = (props) => (
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
      d="M20.4144 5.00003L15.9144 9.50003H20.0002V11.5H12.5002V4.00003H14.5002V8.08582L19.0002 3.58582L20.4144 5.00003ZM4.00015 12.5H11.5002V20H9.50015V15.9142L5.00015 20.4142L3.58594 19L8.08594 14.5H4.00015V12.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { FullscreenExitIcon };

export default FullscreenExitIcon;
