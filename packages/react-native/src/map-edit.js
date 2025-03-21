import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapEditIcon = (props) => (
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
      d="M9 1.84229L15.0744 5.38567L22 2.49999V11H20V5.49999L16 7.16666V11H14V7.07436L10 4.74103V16.9256L11.8677 18.0151L10.8599 19.7426L8.92563 18.6143L2 21.5V5.92562L9 1.84229ZM8 16.8333V4.74103L4 7.07436V18.5L8 16.8333ZM19.7866 12.0858L23.9142 16.2134L16.6276 23.5H12.5011L12.4999 19.3725L19.7866 12.0858ZM18.8648 15.836L20.164 17.1352L21.0858 16.2134L19.7866 14.9142L18.8648 15.836ZM18.7498 18.5494L17.4506 17.2502L14.5001 20.2007L14.5005 21.5H15.7992L18.7498 18.5494Z"
      fill="currentColor"
    />
  </Svg>
);
export { MapEditIcon };

export default MapEditIcon;
