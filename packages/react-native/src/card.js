import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CardIcon = (props) => (
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
      d="M6 3L18 3V5H22V19H18V21H6L6 19H2L2 5H6V3ZM6 7H4V17H6V7ZM8 19H16V5H8V19ZM18 7V17H20V7H18Z"
      fill="currentColor"
    />
  </Svg>
);
export { CardIcon };

export default CardIcon;
