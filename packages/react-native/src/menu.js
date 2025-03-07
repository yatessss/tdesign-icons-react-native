import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuIcon = (props) => (
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
      d="M2 2L22 2L22 22L2 22L2 2ZM4 4L4 9.5L20 9.5V4L4 4ZM20 11.5L4 11.5L4 20L20 20L20 11.5ZM5.99609 6L8 6V8H7.99609V8.00391H5.99609L5.99609 6ZM10 6L18 6V8L10 8L10 6Z"
      fill="currentColor"
    />
  </Svg>
);
export { MenuIcon };

export default MenuIcon;
