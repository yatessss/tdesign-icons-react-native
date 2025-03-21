import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const WinkIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G id="\xE7\x9C\xA8\xE7\x9C\xBC-wink">
      <G id="Union">
        <Path
          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM17.3618 8.88131L15.5408 9.90563L17.4 11.3L16.2 12.9L13 10.5L13 9.04017L16.3813 7.13816L17.3618 8.88131ZM9 8V12H7V8H9ZM8.90004 13.6337L9.40076 14.4993C9.92099 15.3986 10.8909 16 12 16C13.1092 16 14.0791 15.3986 14.5993 14.4993L15.1 13.6337L16.8312 14.6351L16.3305 15.5007C15.4675 16.9926 13.852 18 12 18C10.1481 18 8.53256 16.9926 7.66955 15.5007L7.16882 14.6351L8.90004 13.6337Z"
          fill="currentColor"
        />
      </G>
    </G>
  </Svg>
);
export { WinkIcon };

export default WinkIcon;
