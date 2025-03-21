import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BookmarkIcon = (props) => (
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
      d="M4 3H20V22.9432L12 17.2289L4 22.9432V3ZM6 5V19.0568L12 14.7711L18 19.0568V5H6Z"
      fill="currentColor"
    />
  </Svg>
);
export { BookmarkIcon };

export default BookmarkIcon;
