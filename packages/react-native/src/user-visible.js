import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const UserVisibleIcon = (props) => (
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
      d="M11.5 4C9.567 4 8 5.567 8 7.5C8 9.433 9.567 11 11.5 11C13.433 11 15 9.433 15 7.5C15 5.567 13.433 4 11.5 4ZM6 7.5C6 4.46243 8.46243 2 11.5 2C14.5376 2 17 4.46243 17 7.5C17 10.5376 14.5376 13 11.5 13C8.46243 13 6 10.5376 6 7.5ZM8 16C5.79086 16 4 17.7909 4 20H11.05V22H2V20C2 16.6863 4.68629 14 8 14H11V16H8Z"
      fill="currentColor"
    />
    <Path
      d="M16.2476 19.0002V17.0002H18.7476V19.0002H16.2476Z"
      fill="currentColor"
    />
    <Path
      d="M17.4998 22.5C21.9181 22.5 23.5898 18 23.5898 18C23.5898 18 21.9161 13.5 17.4998 13.5C13.0834 13.5 11.4098 18 11.4098 18C11.4098 18 13.0814 22.5 17.4998 22.5ZM17.498 20.5C14.8825 20.5 13.6285 18 13.6285 18C13.6285 18 14.8774 15.5 17.498 15.5C20.1187 15.5 21.3685 18 21.3685 18C21.3685 18 20.1136 20.5 17.498 20.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { UserVisibleIcon };

export default UserVisibleIcon;
