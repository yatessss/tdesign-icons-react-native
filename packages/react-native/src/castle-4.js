import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Castle4Icon = (props) => (
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
      d="M22 2H14V8.34179C13.6783 8.22804 13.3441 8.14092 13 8.08311V7H11V8.08314C10.6559 8.14096 10.3217 8.2281 10 8.34186V2H2V22H22V2ZM8 9.52822C6.77404 10.6256 6 12.2224 6 14V20H4V4H8V9.52822ZM8 20V15H16V20H13V17H11V20H8ZM18 20V14C18 12.2225 17.2258 10.6256 16 9.52826V4H20V20H18ZM15.874 13H8.12593C8.35516 12.109 8.88389 11.3379 9.60061 10.7995C10.2692 10.2973 11.0985 10 12 10C12.9017 10 13.7307 10.2972 14.3993 10.7995C15.116 11.3379 15.6447 12.1091 15.874 13Z"
      fill="currentColor"
    />
  </Svg>
);
export { Castle4Icon };

export default Castle4Icon;
