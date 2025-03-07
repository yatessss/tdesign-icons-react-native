import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PlayDemoIcon = (props) => (
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
      d="M2 2H22V4H21V18H14.4142L18.4142 22L17 23.4142L12 18.4142L7 23.4142L5.58579 22L9.58579 18H3V4H2V2ZM5 4V16H19V4H5ZM10 6.5L14.6667 10L10 13.5V6.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { PlayDemoIcon };

export default PlayDemoIcon;
