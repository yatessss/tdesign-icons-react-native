import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapIcon = (props) => (
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
      d="M9 1.84229L15.0744 5.38567L22 2.49999V18.0744L15 22.1577L8.92563 18.6143L2 21.5V5.92562L9 1.84229ZM10 16.9256L14 19.259V7.07436L10 4.74103V16.9256ZM8 4.74103L4 7.07436V18.5L8 16.8333V4.74103ZM16 7.16666V19.259L20 16.9256V5.49999L16 7.16666Z"
      fill="currentColor"
    />
  </Svg>
);
export { MapIcon };

export default MapIcon;
