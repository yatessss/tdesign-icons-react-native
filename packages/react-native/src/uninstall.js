import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const UninstallIcon = (props) => (
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
      d="M12 1.59375L16.9142 6.45208L15.5081 7.87435L13 5.39478V12.504H11V5.39477L8.49191 7.87435L7.08581 6.45207L12 1.59375ZM2 2.00003H7.5V4.00003H4V14H20V4.00003H16.5V2.00003H22V22H2V2.00003ZM20 16H4V20H20V16ZM5.99805 16.9981H8.00195V19.002H5.99805V16.9981ZM8.99805 16.9981H11.002V19.002H8.99805V16.9981Z"
      fill="currentColor"
    />
  </Svg>
);
export { UninstallIcon };

export default UninstallIcon;
