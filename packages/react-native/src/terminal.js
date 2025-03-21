import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TerminalIcon = (props) => (
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
      d="M3.50015 5.58582L9.91436 12L3.50015 18.4142L2.08594 17L7.08594 12L2.08594 7.00003L3.50015 5.58582ZM12.0002 18H22.0002V20H12.0002V18Z"
      fill="currentColor"
    />
  </Svg>
);
export { TerminalIcon };

export default TerminalIcon;
