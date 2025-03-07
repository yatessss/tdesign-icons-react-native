import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const City3Icon = (props) => (
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
      d="M22 2H15V7H9V2H2V22H22V2ZM9 9H15V20H13V16H11V20H9V9ZM7 20H4V4H7V20ZM17 20V4H20V20H17ZM14 11H10V13H14V11Z"
      fill="currentColor"
    />
  </Svg>
);
export { City3Icon };

export default City3Icon;
