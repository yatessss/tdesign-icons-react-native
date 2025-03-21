import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapCheckedIcon = (props) => (
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
      d="M9 1.84229L15.0744 5.38567L22 2.49999V12H20V5.49999L16 7.16666V12H14V7.07436L10 4.74103V16.9256L11.8677 18.0151L10.8599 19.7426L8.92563 18.6143L2 21.5V5.92562L9 1.84229ZM8 16.8333V4.74103L4 7.07436V18.5L8 16.8333ZM23.6573 14.5859L16.5862 21.657L12.3436 17.4144L13.7578 16.0001L16.5862 18.8286L22.2431 13.1717L23.6573 14.5859Z"
      fill="currentColor"
    />
  </Svg>
);
export { MapCheckedIcon };

export default MapCheckedIcon;
