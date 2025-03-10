import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapUnlockedIcon = (props) => (
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
      d="M9 1.84229L15.0744 5.38567L22 2.49999V11H20V5.49999L16 7.16666V11H14V7.07436L10 4.74103V16.9256L11.8677 18.0151L10.8599 19.7426L8.92563 18.6143L2 21.5V5.92562L9 1.84229ZM8 16.8333V4.74103L4 7.07436V18.5L8 16.8333ZM18 14C17.3096 14 16.75 14.5596 16.75 15.25V16H22.499V22.5H13.499V16H14.75V15.25C14.75 13.4551 16.2051 12 18 12C18.8936 12 19.7045 12.3619 20.291 12.9448L21.0003 13.6498L19.5904 15.0683L18.8811 14.3634C18.6541 14.1377 18.3441 14 18 14ZM15.499 18V20.5H20.499V18H15.499Z"
      fill="currentColor"
    />
  </Svg>
);
export { MapUnlockedIcon };

export default MapUnlockedIcon;
