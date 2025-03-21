import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const GiggleIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <G id="\xE5\xAC\x89\xE7\xAC\x91-giggle">
      <G id="Union">
        <Path
          d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM17.3618 8.88131L15.5408 9.90563L17.4 11.3L16.2 12.9L13 10.5L13 9.04017L16.3813 7.13816L17.3618 8.88131ZM9 8V12H7V8H9ZM7 13H17V14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14V13ZM9.17071 15C9.58254 16.1652 10.6938 17 12 17C13.3062 17 14.4175 16.1652 14.8293 15H9.17071Z"
          fill="currentColor"
        />
      </G>
    </G>
  </Svg>
);
export { GiggleIcon };

export default GiggleIcon;
