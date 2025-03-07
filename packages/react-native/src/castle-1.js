import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Castle1Icon = (props) => (
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
      d="M7 2V4H9V2H11V4H13V2H15V4H17V2H19V6H18V14H21V13H23V22H1V13H3V14H6V6H5V2H7ZM8 6V20H11V13H13V20H16V6H8ZM18 20H21V16H18V20ZM6 20V16H3V20H6ZM9 7.99805H11.0039V10.002H9V7.99805ZM13 7.99805H15.0039V10.002H13V7.99805Z"
      fill="currentColor"
    />
  </Svg>
);
export { Castle1Icon };

export default Castle1Icon;
