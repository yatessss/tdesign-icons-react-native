import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Castle5Icon = (props) => (
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
      d="M20 2V3H16V2H14V9.13148L12 7.79815L10 9.13148V2H8V3H4V2H2V22H22V2H20ZM4 5H8V10H6V20H4V5ZM8 20V12H9.30278L12 10.2019L14.6972 12H16V20H13V15H11V20H8ZM18 20V10H16V5H20V20H18Z"
      fill="currentColor"
    />
  </Svg>
);
export { Castle5Icon };

export default Castle5Icon;
