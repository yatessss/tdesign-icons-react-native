import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FullscreenExit1Icon = (props) => (
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
      d="M14 20V14H20V16H16V20H14ZM8 20V16H4V14H10V20H8ZM20 10H14V4H16V8H20V10ZM10 10H4V8H8V4H10V10Z"
      fill="currentColor"
    />
  </Svg>
);
export { FullscreenExit1Icon };

export default FullscreenExit1Icon;
