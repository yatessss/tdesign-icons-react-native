import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const GamepadIcon = (props) => (
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
      d="M2.06055 3H21.9394L23.0644 21H16.2792L15.2792 18H8.72076L7.72076 21H0.935547L2.06055 3ZM3.93945 5L3.06445 19H6.27924L7.27924 16H16.7208L17.7208 19H20.9355L20.0605 5H3.93945ZM9 7.5V9.5L11 9.5V11.5H9V13.5H7L7 11.5L5 11.5L5 9.5H7V7.5H9ZM16 7.5H18.0039V9.50391H16V7.5ZM16 11.4961H18.0039V13.5H16V11.4961Z"
      fill="currentColor"
    />
  </Svg>
);
export { GamepadIcon };

export default GamepadIcon;
