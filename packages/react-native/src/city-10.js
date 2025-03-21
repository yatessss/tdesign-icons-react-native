import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const City10Icon = (props) => (
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
      d="M14 0.719238V10H22V22H2V3.71924L14 0.719238ZM14 20H15.9997L16 15H18V20H20V12H14V20ZM4 5.28079V20H12V3.28079L4 5.28079ZM6 7.99806H8.00391V10.002H6V7.99806Z"
      fill="currentColor"
    />
  </Svg>
);
export { City10Icon };

export default City10Icon;
