import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const UserArrowDownIcon = (props) => (
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
      d="M11.5 4C9.567 4 8 5.567 8 7.5C8 9.433 9.567 11 11.5 11C13.433 11 15 9.433 15 7.5C15 5.567 13.433 4 11.5 4ZM6 7.5C6 4.46243 8.46243 2 11.5 2C14.5376 2 17 4.46243 17 7.5C17 10.5376 14.5376 13 11.5 13C8.46243 13 6 10.5376 6 7.5ZM19 12V19.1092L21.5081 16.6297L22.9142 18.0519L18 22.9103L13.0858 18.0519L14.4919 16.6297L17 19.1092V12H19ZM8 16C5.79086 16 4 17.7909 4 20H12.8008V22H2V20C2 16.6863 4.68629 14 8 14H12.75V16H8Z"
      fill="currentColor"
    />
  </Svg>
);
export { UserArrowDownIcon };

export default UserArrowDownIcon;
