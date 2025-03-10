import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Building4Icon = (props) => (
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
      d="M9 2H21V4H20V8H22V22H2V8H10V4H9V2ZM12 4V8H18V4H12ZM20 10H4V20H8V14H16V20H20V10ZM14 20V16H10V20H14ZM13 4.99805H15.0039V7.00195H13V4.99805Z"
      fill="currentColor"
    />
  </Svg>
);
export { Building4Icon };

export default Building4Icon;
