import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const IpodIcon = (props) => (
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
      d="M3 1H21V23H3V1ZM5 3V13H7V9H9V13H11V5H13V13H15V7H17V13H19V3H5ZM19 15H5V21H19V15ZM10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18Z"
      fill="currentColor"
    />
  </Svg>
);
export { IpodIcon };

export default IpodIcon;
