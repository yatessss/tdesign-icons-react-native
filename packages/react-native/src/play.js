import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PlayIcon = (props) => (
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
      d="M18.25 11.9998L8.5 17.6289L8.5 6.37061L18.25 11.9998Z"
      fill="currentColor"
    />
  </Svg>
);
export { PlayIcon };

export default PlayIcon;
