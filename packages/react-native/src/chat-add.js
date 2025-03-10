import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatAddIcon = (props) => (
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
      d="M21 0V3H24V5H21V8H19V5H16V3H19V0H21ZM1.5 2H14V4H3.5V18.2962L6.12426 16H20.5V10H22.5V18H6.87574L1.5 22.7038V2Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChatAddIcon };

export default ChatAddIcon;
