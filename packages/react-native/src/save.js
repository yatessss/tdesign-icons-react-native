import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SaveIcon = (props) => (
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
      d="M2 2L16.4142 2L22 7.58579L22 22L2 22L2 2ZM4 4L4 20H6L6 14L18 14V20H20L20 8.41421L15.5858 4L13 4L13 8L6 8L6 4L4 4ZM8 4V6L11 6V4L8 4ZM16 20L16 16H8V20L16 20Z"
      fill="currentColor"
    />
  </Svg>
);
export { SaveIcon };

export default SaveIcon;
