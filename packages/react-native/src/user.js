import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const UserIcon = (props) => (
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
      d="M12 4C10.067 4 8.5 5.567 8.5 7.5C8.5 9.433 10.067 11 12 11C13.933 11 15.5 9.433 15.5 7.5C15.5 5.567 13.933 4 12 4ZM6.5 7.5C6.5 4.46243 8.96243 2 12 2C15.0376 2 17.5 4.46243 17.5 7.5C17.5 10.5376 15.0376 13 12 13C8.96243 13 6.5 10.5376 6.5 7.5ZM3 19C3 16.2386 5.23858 14 8 14H16C18.7614 14 21 16.2386 21 19V22H3V19ZM8 16C6.34315 16 5 17.3431 5 19V20H19V19C19 17.3431 17.6569 16 16 16H8Z"
      fill="currentColor"
    />
  </Svg>
);
export { UserIcon };

export default UserIcon;
