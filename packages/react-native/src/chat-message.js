import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatMessageIcon = (props) => (
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
      d="M1.5 22.7038L1.5 2L22.5 2V18H6.87574L1.5 22.7038ZM3.5 18.2962L6.12426 16H20.5V4L3.5 4L3.5 18.2962ZM13.0039 11H11V8.99609H13.0039V11ZM8.00391 11L6 11L6 8.99609H8.00391L8.00391 11ZM18.0039 11L16 11V8.99609H18.0039V11Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChatMessageIcon };

export default ChatMessageIcon;
