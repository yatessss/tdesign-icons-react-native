import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatPollIcon = (props) => (
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
      d="M1.5 2H22.5V18H6.87574L1.5 22.7038V2ZM3.5 4V18.2962L6.12426 16H20.5V4H3.5ZM13 6V14H11V6H13ZM18 9V14H16V9H18ZM8 11V14H6V11H8Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChatPollIcon };

export default ChatPollIcon;
