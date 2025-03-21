import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SoundMute1Icon = (props) => (
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
      d="M15 1.29004V22.7095L5.7369 17.4998L1 17.4998L1 6.49976H5.7369L15 1.29004ZM4.99882 8.49976H3L3 15.4998L4.99882 15.4998L4.99882 8.49976ZM6.99882 15.9149L13 19.29V4.70949L6.99882 8.08465V15.9149ZM17.8787 8.46423L20 10.5855L22.1213 8.46423L23.5355 9.87844L21.4142 11.9998L23.5355 14.1211L22.1213 15.5353L20 13.414L17.8787 15.5353L16.4645 14.1211L18.5858 11.9998L16.4645 9.87844L17.8787 8.46423Z"
      fill="currentColor"
    />
  </Svg>
);
export { SoundMute1Icon };

export default SoundMute1Icon;
