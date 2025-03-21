import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Music2Icon = (props) => (
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
      d="M11 3H18V5H13V18C13 20.2091 11.2091 22 9 22C6.79086 22 5 20.2091 5 18C5 15.7909 6.79086 14 9 14C9.72857 14 10.4117 14.1948 11 14.5351V3ZM11 18C11 16.8954 10.1046 16 9 16C7.89543 16 7 16.8954 7 18C7 19.1046 7.89543 20 9 20C10.1046 20 11 19.1046 11 18Z"
      fill="currentColor"
    />
  </Svg>
);
export { Music2Icon };

export default Music2Icon;
