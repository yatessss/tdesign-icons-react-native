import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const InstallIcon = (props) => (
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
      d="M13 2V9.10923L15.5081 6.62966L16.9142 8.05193L12 12.9103L7.08581 8.05194L8.49191 6.62966L11 9.10924V2H13ZM2 2.00008H9V4.00008H4V14.0001H20V4.00008H15V2.00008H22V22.0001H2V2.00008ZM20 16.0001H4V20.0001H20V16.0001ZM5.99805 16.9981H8.00195V19.002H5.99805V16.9981ZM8.99805 16.9981H11.002V19.002H8.99805V16.9981Z"
      fill="currentColor"
    />
  </Svg>
);
export { InstallIcon };

export default InstallIcon;
