import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BluetoothIcon = (props) => (
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
      d="M11.0002 0.254639L18.4526 6.96181L13.4144 12L18.4526 17.0382L11.0002 23.7454V14.4142L7.00015 18.4142L5.58594 17L10.5859 12L5.58594 7L7.00015 5.58579L11.0002 9.58579V0.254639ZM13.0002 14.4142V19.2546L15.5477 16.9618L13.0002 14.4142ZM13.0002 9.58579L15.5477 7.0382L13.0002 4.74536V9.58579Z"
      fill="currentColor"
    />
  </Svg>
);
export { BluetoothIcon };

export default BluetoothIcon;
