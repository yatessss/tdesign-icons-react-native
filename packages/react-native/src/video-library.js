import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const VideoLibraryIcon = (props) => (
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
      d="M6.00005 2H18.0001V4H6.00005V2ZM4.00005 5H20.0001V7H4.00005V5ZM1.83887 8H22.1612L20.0612 22H3.93887L1.83887 8ZM4.16124 10L5.66124 20H18.3389L19.8389 10H4.16124ZM10.5001 11.5L15.1667 15L10.5001 18.5V11.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { VideoLibraryIcon };

export default VideoLibraryIcon;
