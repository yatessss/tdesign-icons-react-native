import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TipsIcon = (props) => (
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
      d="M23 2V19L15.4142 19L12 22.4142L8.58579 19H1L1 2L23 2ZM21 4L3 4L3 17H9.41421L12 19.5858L14.5858 17H21V4Z"
      fill="currentColor"
    />
  </Svg>
);
export { TipsIcon };

export default TipsIcon;
