import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const UserLockedIcon = (props) => (
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
      d="M11.5 4C9.567 4 8 5.567 8 7.5C8 9.433 9.567 11 11.5 11C13.433 11 15 9.433 15 7.5C15 5.567 13.433 4 11.5 4ZM6 7.5C6 4.46243 8.46243 2 11.5 2C14.5376 2 17 4.46243 17 7.5C17 10.5376 14.5376 13 11.5 13C8.46243 13 6 10.5376 6 7.5ZM18 14C18.6904 14 19.25 14.5596 19.25 15.25V16H16.75V15.25C16.75 14.5596 17.3096 14 18 14ZM21.25 16V15.25C21.25 13.4551 19.7949 12 18 12C16.2051 12 14.75 13.4551 14.75 15.25V16H13.4985V22.5H22.4985V16H21.25ZM20.4985 18V20.5H15.4985V18H20.4985ZM8 16C5.79086 16 4 17.7909 4 20H11.5508V22H2V20C2 16.6863 4.68629 14 8 14H11.5V16H8Z"
      fill="currentColor"
    />
  </Svg>
);
export { UserLockedIcon };

export default UserLockedIcon;
