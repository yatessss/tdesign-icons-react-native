import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TerminalWindowIcon = (props) => (
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
      d="M23 3L1 3L1 21L23 21V3ZM3 10H21V19H3L3 10ZM3 8V5L21 5V8H3ZM7 17H5L5 12L7 12L7 17Z"
      fill="currentColor"
    />
  </Svg>
);
export { TerminalWindowIcon };

export default TerminalWindowIcon;
