import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Transform1Icon = (props) => (
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
      d="M2.00001 2L8 2V4L16 4L16 2L22 2V8L20 8L20 16H22V22H16L16 20L8 20V22H2L2 16H4L4 8H2L2.00001 2ZM6 8L6 16L8 16V18H16L16 16H18L18 8H16L16 6L8 6V8H6ZM6 4L4.00001 4L4 6H6L6 4ZM20 6V4H18V6L20 6ZM18 18V20H20V18L18 18ZM6 20V18H4L4 20H6Z"
      fill="currentColor"
    />
  </Svg>
);
export { Transform1Icon };

export default Transform1Icon;
