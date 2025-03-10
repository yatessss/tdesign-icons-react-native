import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChurchIcon = (props) => (
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
      d="M11 1V3H9V5H11V5.97934L6 9.47934V12H2V22H22V12H18V9.47934L13 5.97934V5H15V3H13V1H11ZM12 7.72066L16 10.5207V20H15V16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16V20H8V10.5207L12 7.72066ZM6 20H4V14H6V20ZM11 20V16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16V20H11ZM18 20V14H20V20H18Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChurchIcon };

export default ChurchIcon;
