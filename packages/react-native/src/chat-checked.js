import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatCheckedIcon = (props) => (
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
      d="M1.5 2H22.5V18H6.87574L1.5 22.7038V2ZM3.5 4V18.2962L6.12426 16H20.5V4H3.5ZM17.6568 7.58569L10.5858 14.6568L6.34311 10.4141L7.75732 8.99991L10.5858 11.8283L16.2426 6.17148L17.6568 7.58569Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChatCheckedIcon };

export default ChatCheckedIcon;
