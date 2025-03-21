import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MediaLibraryIcon = (props) => (
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
      d="M5 2L19 2V4L5 4V2ZM3 5.5L21 5.5V7.5L3 7.5V5.5ZM1 9L23 9V22L1 22L1 9ZM3 11L3 20L21 20V11H3ZM9.75 12.4689L15 15.5L9.75 18.5311V12.4689Z"
      fill="currentColor"
    />
  </Svg>
);
export { MediaLibraryIcon };

export default MediaLibraryIcon;
