import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BacktopRectangleIcon = (props) => (
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
      d="M2 2H22V22H2V2ZM4 4V20H20V4H4ZM17.5 8H6.5V6H17.5V8ZM12 8.80761L16.5962 13.4038L15.182 14.818L13 12.636L13 18.5H11L11 12.636L8.81802 14.818L7.40381 13.4038L12 8.80761Z"
      fill="currentColor"
    />
  </Svg>
);
export { BacktopRectangleIcon };

export default BacktopRectangleIcon;
