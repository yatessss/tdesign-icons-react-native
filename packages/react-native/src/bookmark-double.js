import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BookmarkDoubleIcon = (props) => (
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
      d="M23 0.000732422L23.0034 18.4186L21 16.4152V2.00129L10.001 2.00199V0.0019865L23 0.000732422ZM3 4.00004H19V23.9432L11 18.2289L3 23.9432V4.00004ZM5 6.00004V20.0568L11 15.7711L17 20.0568V6.00004H5Z"
      fill="currentColor"
    />
  </Svg>
);
export { BookmarkDoubleIcon };

export default BookmarkDoubleIcon;
