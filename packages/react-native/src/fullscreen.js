import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FullscreenIcon = (props) => (
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
      d="M12 4.5H19.5V12H17.5V7.91421L7.91421 17.5H12V19.5H4.5V12H6.5V16.0858L16.0858 6.5H12V4.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { FullscreenIcon };

export default FullscreenIcon;
