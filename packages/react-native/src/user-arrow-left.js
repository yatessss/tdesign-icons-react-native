import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const UserArrowLeftIcon = (props) => (
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
      d="M11.5 4C9.567 4 8 5.567 8 7.5C8 9.433 9.567 11 11.5 11C13.433 11 15 9.433 15 7.5C15 5.567 13.433 4 11.5 4ZM6 7.5C6 4.46243 8.46243 2 11.5 2C14.5376 2 17 4.46243 17 7.5C17 10.5376 14.5376 13 11.5 13C8.46243 13 6 10.5376 6 7.5ZM18.8723 14.4939L16.3927 17.0019L23.502 17.0019V19.0019L16.3927 19.0019L18.8723 21.51L17.45 22.9161L12.5917 18.0019L17.45 13.0878L18.8723 14.4939ZM8 16C5.79086 16 4 17.7909 4 20H12.0508V22H2V20C2 16.6863 4.68629 14 8 14H12V16H8Z"
      fill="currentColor"
    />
  </Svg>
);
export { UserArrowLeftIcon };

export default UserArrowLeftIcon;
