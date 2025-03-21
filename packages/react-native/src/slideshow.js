import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SlideshowIcon = (props) => (
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
      d="M6 3L18 3V21H6L6 3ZM8 5V19H16V5H8ZM1 5H4.5V19H1V17H2.5L2.5 7H1V5ZM19.5 5L23 5V7H21.5V17H23V19H19.5V5Z"
      fill="currentColor"
    />
  </Svg>
);
export { SlideshowIcon };

export default SlideshowIcon;
