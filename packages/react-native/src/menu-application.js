import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuApplicationIcon = (props) => (
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
      d="M3 3H6V6H3V3ZM10.5 3H13.5V6H10.5V3ZM18 3H21V6H18V3ZM3 10.5H6V13.5H3V10.5ZM10.5 10.5H13.5V13.5H10.5V10.5ZM18 10.5H21V13.5H18V10.5ZM3 18H6V21H3V18ZM10.5 18H13.5V21H10.5V18ZM18 18H21V21H18V18Z"
      fill="currentColor"
    />
  </Svg>
);
export { MenuApplicationIcon };

export default MenuApplicationIcon;
