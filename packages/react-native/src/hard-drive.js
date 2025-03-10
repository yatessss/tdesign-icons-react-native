import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HardDriveIcon = (props) => (
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
      d="M2 2H22V22H2V2ZM4 4V14H20V4H4ZM20 16H4V20H20V16ZM5.99805 16.998H8.00195V19.002H5.99805V16.998ZM8.99805 16.998H11.002V19.002H8.99805V16.998Z"
      fill="currentColor"
    />
  </Svg>
);
export { HardDriveIcon };

export default HardDriveIcon;
