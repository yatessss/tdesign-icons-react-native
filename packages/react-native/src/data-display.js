import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DataDisplayIcon = (props) => (
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
      d="M22 18H3L3 20H22V18ZM20 16C21.1046 16 22 15.1046 22 14V6C22 4.89543 21.1046 4 20 4L16 4V6H20V9H16.5V11H20V14H16V16H20ZM15 14H11V11H13C14.1046 11 15 10.1046 15 9V6C15 4.89543 14.1046 4 13 4L9 4V6L13 6V9H11C9.89543 9 9 9.89543 9 11V16H15V14ZM8 14H6.5L6.5 6C6.5 4.89543 5.60457 4 4.5 4L3 4L3 6H4.5V14H3L3 16H8V14Z"
      fill="currentColor"
    />
  </Svg>
);
export { DataDisplayIcon };

export default DataDisplayIcon;
