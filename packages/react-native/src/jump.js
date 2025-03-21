import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const JumpIcon = (props) => (
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
      d="M3 21L3 3L10.0909 3V5H5L5 19H19V13.9091H21V21H3ZM10.5858 12L17.5858 5L13 5V3L21 3L21 11H19V6.41421L12 13.4142L10.5858 12Z"
      fill="currentColor"
    />
  </Svg>
);
export { JumpIcon };

export default JumpIcon;
