import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapCancelIcon = (props) => (
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
      d="M9 1.84229L15.0744 5.38567L22 2.49999V11H20V5.49999L16 7.16666V11H14V7.07436L10 4.74103V16.9256L11.8677 18.0151L10.8599 19.7426L8.92563 18.6143L2 21.5V5.92562L9 1.84229ZM8 16.8333V4.74103L4 7.07436V18.5L8 16.8333ZM15.1719 12.7574L18.0003 15.5858L20.8287 12.7574L22.2429 14.1716L19.4145 17L22.2429 19.8285L20.8287 21.2427L18.0003 18.4143L15.1719 21.2427L13.7577 19.8285L16.5861 17L13.7577 14.1716L15.1719 12.7574Z"
      fill="currentColor"
    />
  </Svg>
);
export { MapCancelIcon };

export default MapCancelIcon;
