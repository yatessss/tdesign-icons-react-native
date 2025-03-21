import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BatteryAddIcon = (props) => (
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
      d="M8 0.5H16V3H21V23.5H3V3H8V0.5ZM10 2.5V5H5V21.5H19V5H14V2.5H10ZM13 9.5V12.5H16V14.5H13V17.5H11V14.5H8V12.5H11V9.5H13Z"
      fill="currentColor"
    />
  </Svg>
);
export { BatteryAddIcon };

export default BatteryAddIcon;
