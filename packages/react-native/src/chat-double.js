import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatDoubleIcon = (props) => (
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
      d="M1 2H20V16H5.82046L1 19.4432V2ZM3 4V15.5568L5.17953 14H18V4H3ZM23.5 4.5V22.9432L18.6795 19.5H7.5V17.5H19.3205L21.5 19.0568V4.5H23.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChatDoubleIcon };

export default ChatDoubleIcon;
