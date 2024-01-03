import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SimCard2Icon = (props) => (
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
      d="M7.58579 1H21V23H3V5.58579L7.58579 1ZM8.41421 3L5 6.41421V21H19V3H8.41421ZM12 10C11.4477 10 11 10.4477 11 11V12H9V11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 11.814 14.6745 12.5539 14.1488 13.0935L14.1211 13.1219L12.28 14.7333H15V16.7333H9V14.9463L12.739 11.6737C12.902 11.4952 13 11.26 13 11C13 10.4477 12.5523 10 12 10Z"
      fill="currentColor"
    />
  </Svg>
);
export { SimCard2Icon };

export default SimCard2Icon;
