import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TabIcon = (props) => (
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
      d="M22.5 20L1.5 20L1.5 18H22.5V20ZM22.5 4V16H16.5L16.5 4L22.5 4ZM20.5 6L18.5 6V14H20.5V6ZM15 4L15 16L9 16L9 4L15 4ZM13 6L11 6L11 14L13 14L13 6ZM7.5 4L7.5 16L1.5 16L1.5 4L7.5 4ZM5.5 6L3.5 6L3.5 14H5.5V6Z"
      fill="currentColor"
    />
  </Svg>
);
export { TabIcon };

export default TabIcon;
