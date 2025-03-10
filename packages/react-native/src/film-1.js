import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Film1Icon = (props) => (
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
      d="M2 2L22 2L22 22L2 22L2 2ZM4 4V6H6L6 4L4 4ZM8 4L8 11H16V4L8 4ZM18 4V6L20 6V4H18ZM20 8H18V11L20 11V8ZM20 13L18 13L18 16L20 16L20 13ZM20 18L18 18V20H20V18ZM16 20L16 13H8L8 20L16 20ZM6 20V18H4L4 20H6ZM4 16H6L6 13H4V16ZM4 11H6L6 8L4 8L4 11Z"
      fill="currentColor"
    />
  </Svg>
);
export { Film1Icon };

export default Film1Icon;
