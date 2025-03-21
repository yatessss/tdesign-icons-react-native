import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChatBubbleLockedIcon = (props) => (
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
      d="M12 3C7.02944 3 3 7.02944 3 12C3 14.3966 3.93542 16.5725 5.46305 18.1862L5.96701 18.7185L4.69951 21H12C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23H1.30049L3.51936 19.006C1.94632 17.1038 1 14.6615 1 12ZM12 8.5C12.6904 8.5 13.25 9.05964 13.25 9.75V10.5H10.75V9.75C10.75 9.05964 11.3096 8.5 12 8.5ZM15.25 10.5V9.75C15.25 7.95508 13.7949 6.5 12 6.5C10.2051 6.5 8.75 7.95507 8.75 9.75V10.5H7.49854V17H16.4985V10.5H15.25ZM14.4985 12.5V15H9.49854V12.5H14.4985Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChatBubbleLockedIcon };

export default ChatBubbleLockedIcon;
