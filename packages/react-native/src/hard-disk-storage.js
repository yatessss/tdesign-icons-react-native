import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HardDiskStorageIcon = (props) => (
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
      d="M2 2H22V22H2V2ZM4 4V20H20V4H17.5V11.875H6.5V4H4ZM8.5 4V9.875H15.5V4H8.5ZM14 6V9H12V6H14Z"
      fill="currentColor"
    />
  </Svg>
);
export { HardDiskStorageIcon };

export default HardDiskStorageIcon;
