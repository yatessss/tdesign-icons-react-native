import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArtboardIcon = (props) => (
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
      d="M8 2V6L16 6V2L18 2V6L22 6V8L18 8L18 16L22 16V18L18 18V22H16L16 18L8 18V22H6L6 18H2L2 16H6L6 8L2 8L2 6L6 6L6 2L8 2ZM8 8L8 16L16 16V8L8 8Z"
      fill="currentColor"
    />
  </Svg>
);
export { ArtboardIcon };

export default ArtboardIcon;
