import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SoundLowIcon = (props) => (
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
      d="M15 1.29004V22.7095L5.7369 17.4998L1 17.4998L1 6.49976H5.7369L15 1.29004ZM4.99882 8.49976H3L3 15.4998L4.99882 15.4998L4.99882 8.49976ZM6.99882 15.9149L13 19.29V4.70949L6.99882 8.08465V15.9149ZM18.6821 7.40293L19.3892 8.11004C21.5371 10.2579 21.5371 13.7403 19.3892 15.8882L18.6821 16.5953L17.2679 15.1811L17.975 14.474C19.3419 13.1072 19.3419 10.8911 17.975 9.52425L17.2679 8.81715L18.6821 7.40293Z"
      fill="currentColor"
    />
  </Svg>
);
export { SoundLowIcon };

export default SoundLowIcon;
