import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Gamepad1Icon = (props) => (
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
      d="M11 4C11 2.89543 11.8954 2 13 2H17V4H13V6H22V20H2V6H11V4ZM4 8V18H20V8H4ZM9 10V12H11V14H9V16H7V14H5V12H7V10H9ZM15 10H17.0035V12H19.0035V14.004H17.0035V16.004H15V14.004H13V12H15V10ZM15.0035 12.004V14H17V12.004H15.0035Z"
      fill="currentColor"
    />
  </Svg>
);
export { Gamepad1Icon };

export default Gamepad1Icon;
