import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapLockedIcon = (props) => (
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
      d="M9 1.84229L15.0744 5.38567L22 2.49999V11H20V5.49999L16 7.16666V11H14V7.07436L10 4.74103V16.9256L11.8677 18.0151L10.8599 19.7426L8.92563 18.6143L2 21.5V5.92562L9 1.84229ZM8 16.8333V4.74103L4 7.07436V18.5L8 16.8333ZM18 14C18.6904 14 19.25 14.5596 19.25 15.25V16H16.75V15.25C16.75 14.5596 17.3096 14 18 14ZM21.25 16V15.25C21.25 13.4551 19.7949 12 18 12C16.2051 12 14.75 13.4551 14.75 15.25V16H13.499V22.5H22.499V16H21.25ZM20.499 18V20.5H15.499V18H20.499Z"
      fill="currentColor"
    />
  </Svg>
);
export { MapLockedIcon };

export default MapLockedIcon;
