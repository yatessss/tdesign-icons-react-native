import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FlipToFrontIcon = (props) => (
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
      d="M7 3H21V17H7V3ZM9 5V15H19V5H9ZM5 7.5V10.5H3V7.5H5ZM5 12.5V15.5H3V12.5H5ZM5 17.5V19H6.5V21H3V17.5H5ZM11.5 19V21H8.5V19H11.5ZM13.5 19H16.5V21H13.5V19Z"
      fill="currentColor"
    />
  </Svg>
);
export { FlipToFrontIcon };

export default FlipToFrontIcon;
