import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuFoldIcon = (props) => (
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
      d="M2 4H22V6H2V4ZM2 9.57075L5.8868 12L2 14.4292L2 9.57075ZM7 11L22 11V13L7 13V11ZM2 18L22 18V20L2 20L2 18Z"
      fill="currentColor"
    />
  </Svg>
);
export { MenuFoldIcon };

export default MenuFoldIcon;
