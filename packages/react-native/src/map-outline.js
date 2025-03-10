import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapOutlineIcon = (props) => (
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
      d="M9 1.84229L15.0744 5.38567L22 2.49999V18.0744L15 22.1577L8.92563 18.6143L2 21.5V5.92562L9 1.84229ZM4 7.07436V18.5L9.07437 16.3857L15 19.8423L20 16.9256V5.49999L14.9256 7.61431L9 4.15769L4 7.07436Z"
      fill="currentColor"
    />
  </Svg>
);
export { MapOutlineIcon };

export default MapOutlineIcon;
