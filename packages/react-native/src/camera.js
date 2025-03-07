import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CameraIcon = (props) => (
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
      d="M7.88197 2H16.118L17.618 5H23V21H1V5H6.38197L7.88197 2ZM9.11803 4L7.61803 7H3V19H21V7H16.382L14.882 4H9.11803ZM12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5ZM7 12.5C7 9.73858 9.23858 7.5 12 7.5C14.7614 7.5 17 9.73858 17 12.5C17 15.2614 14.7614 17.5 12 17.5C9.23858 17.5 7 15.2614 7 12.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { CameraIcon };

export default CameraIcon;
