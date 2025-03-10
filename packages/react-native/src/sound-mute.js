import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SoundMuteIcon = (props) => (
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
      d="M19 22.7095L9.7369 17.4998H5L5 6.49976H9.7369L19 1.29004L19 22.7095ZM8.99882 8.49976H7L7 15.4998L8.99882 15.4998L8.99882 8.49976ZM10.9988 15.9149L17 19.29L17 4.70949L10.9988 8.08465L10.9988 15.9149Z"
      fill="currentColor"
    />
  </Svg>
);
export { SoundMuteIcon };

export default SoundMuteIcon;
