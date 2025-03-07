import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const VerifyIcon = (props) => (
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
      d="M1 3L23 3V21H1L1 3ZM3 5L3 19H21V5L3 5ZM15.5 9.5C16.0523 9.5 16.5 9.94772 16.5 10.5C16.5 11.0523 16.0523 11.5 15.5 11.5C14.9477 11.5 14.5 11.0523 14.5 10.5C14.5 9.94772 14.9477 9.5 15.5 9.5ZM17.9003 12.2999C18.2769 11.7985 18.5 11.1753 18.5 10.5C18.5 8.84315 17.1569 7.5 15.5 7.5C13.8431 7.5 12.5 8.84315 12.5 10.5C12.5 11.1753 12.7231 11.7985 13.0997 12.2999C12.1283 13.0297 11.5 14.1915 11.5 15.5V16.5H13.5V15.5C13.5 14.3954 14.3954 13.5 15.5 13.5C16.6046 13.5 17.5 14.3954 17.5 15.5V16.5H19.5V15.5C19.5 14.1915 18.8717 13.0297 17.9003 12.2999ZM5 9H9.5V11H5V9ZM5 13H9.5V15H5V13Z"
      fill="currentColor"
    />
  </Svg>
);
export { VerifyIcon };

export default VerifyIcon;
