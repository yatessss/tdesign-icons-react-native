import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SystemStorageIcon = (props) => (
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
      d="M8.5 4.00041V7.62538H11V4.00022L8.5 4.00041ZM13 4.00024V9.62538H6.5V4.00049H4V20.0001H20V9.0396L14.9607 4.00045L13 4.00024ZM15.7893 2.00053L22 8.21116V22.0001H2V2.00049L15.7893 2.00053ZM7 14.0001V12.0001H17V14.0001H7ZM7 17.0001V15.0001H13V17.0001H7Z"
      fill="currentColor"
    />
  </Svg>
);
export { SystemStorageIcon };

export default SystemStorageIcon;
