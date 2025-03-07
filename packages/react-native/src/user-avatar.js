import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const UserAvatarIcon = (props) => (
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
      d="M2 2L22 2L22 22L2 22L2 2ZM19.5 20H20L20 4L4 4L4 20H4.5C4.5 17.2386 6.73858 15 9.5 15H14.5C17.2614 15 19.5 17.2386 19.5 20ZM12 7C10.6193 7 9.5 8.11929 9.5 9.5C9.5 10.8807 10.6193 12 12 12C13.3807 12 14.5 10.8807 14.5 9.5C14.5 8.11929 13.3807 7 12 7ZM7.5 9.5C7.5 7.01472 9.51472 5 12 5C14.4853 5 16.5 7.01472 16.5 9.5C16.5 11.9853 14.4853 14 12 14C9.51472 14 7.5 11.9853 7.5 9.5ZM9.5 17C7.84315 17 6.5 18.3431 6.5 20L17.5 20C17.5 18.3431 16.1569 17 14.5 17H9.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { UserAvatarIcon };

export default UserAvatarIcon;
