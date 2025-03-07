import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapMarkedIcon = (props) => (
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
      d="M9 1.84229L15.0744 5.38567L22 2.49999V9.99999H20V5.49999L16 7.16666V8.99999H14V7.07436L10 4.74103V16.9256L11.8677 18.0151L10.8599 19.7426L8.92563 18.6143L2 21.5V5.92562L9 1.84229ZM8 16.8333V4.74103L4 7.07436V18.5L8 16.8333ZM13.75 11.9961H22.25V22.2906L18.0029 19.6742L13.75 22.2885V11.9961ZM15.75 13.9961V18.7114L18.0041 17.3258L20.25 18.7094V13.9961H15.75Z"
      fill="currentColor"
    />
  </Svg>
);
export { MapMarkedIcon };

export default MapMarkedIcon;
