import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const NotificationFilledIcon = (props) => (
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
      d="M8.64494 20.5C9.07521 21.9457 10.4145 23 12 23C13.5855 23 14.9248 21.9457 15.3551 20.5H8.64494Z"
      fill="currentColor"
    />
    <Path
      d="M3 19.5H21V16.5L19 13.5V8.5C19 4.63401 15.866 1.5 12 1.5C8.13401 1.5 5 4.63401 5 8.5V13.5L3 16.5V19.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { NotificationFilledIcon };

export default NotificationFilledIcon;
