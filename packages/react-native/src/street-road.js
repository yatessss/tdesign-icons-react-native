import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const StreetRoadIcon = (props) => (
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
      d="M2 2H22V22H2V2ZM4 4V20H20V4H4ZM18.372 6.343L6.657 13.372L5.62801 11.657L7.73945 10.3901L5.6402 6.61149L7.38851 5.6402L9.45539 9.36058L17.343 4.62801L18.372 6.343ZM18.372 12.343L16.2605 13.6099L18.3598 17.3885L16.6115 18.3598L14.5446 14.6394L6.657 19.372L5.62801 17.657L17.343 10.628L18.372 12.343Z"
      fill="currentColor"
    />
  </Svg>
);
export { StreetRoadIcon };

export default StreetRoadIcon;
