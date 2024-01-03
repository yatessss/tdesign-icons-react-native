import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const VehicleIcon = (props) => (
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
      d="M0 5C0 3.89543 0.895431 3 2 3H13C14.1046 3 15 3.89543 15 5V7H13V5H2V12H8V14H2V18H8V20H5.41421L3.5 21.9142L2.08579 20.5L2.58579 20H2C0.89543 20 0 19.1046 0 18V5ZM11.323 8H21.677L24 13.8074V21.5H22V20H11V21.5H9V13.8074L11.323 8ZM11 18H22V14.1926L21.923 14H11.077L11 14.1926V18ZM11.877 12H21.123L20.323 10H12.677L11.877 12ZM3 15H5.00391V17.0039H3V15ZM12 15H14.0039V17.0039H12V15ZM19 15H21.0039V17.0039H19V15Z"
      fill="currentColor"
    />
  </Svg>
);
export { VehicleIcon };

export default VehicleIcon;
