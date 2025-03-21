import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ExpandHorizontalIcon = (props) => (
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
      d="M3.5 4V20H1.5L1.5 4L3.5 4ZM4.08579 12L9 7.08579L10.4142 8.5L7.91421 11L16.0858 11L13.5858 8.50001L15 7.08579L19.9142 12L15 16.9142L13.5858 15.5L16.0858 13L7.91422 13L10.4142 15.5L9 16.9142L4.08579 12ZM22.5 4V20H20.5V4L22.5 4Z"
      fill="currentColor"
    />
  </Svg>
);
export { ExpandHorizontalIcon };

export default ExpandHorizontalIcon;
