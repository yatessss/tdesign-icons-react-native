import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const VideoIcon = (props) => (
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
      d="M2 2H22V22H2V2ZM4 4V20H20V4H4ZM8 6.37083L17.75 12L8 17.6292L8 6.37083ZM10 9.83494L10 14.1651L13.75 12L10 9.83494Z"
      fill="currentColor"
    />
  </Svg>
);
export { VideoIcon };

export default VideoIcon;
