import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TreeListIcon = (props) => (
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
      d="M6 22C3.79086 22 2 20.2091 2 18C2 16.1362 3.27477 14.5701 5 14.126V9.87398C3.27477 9.42994 2 7.86384 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6C10 7.86384 8.72523 9.42994 7 9.87398L7 14.126C8.72523 14.5701 10 16.1362 10 18C10 20.2091 8.20914 22 6 22ZM4 18C4 19.1046 4.89543 20 6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18ZM4 6C4 7.10457 4.89543 8 6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6ZM12 18H19V20H12V18ZM12 11L22 11V13L12 13V11ZM12 4L19 4V6L12 6V4Z"
      fill="currentColor"
    />
  </Svg>
);
export { TreeListIcon };

export default TreeListIcon;
