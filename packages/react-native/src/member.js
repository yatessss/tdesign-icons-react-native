import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MemberIcon = (props) => (
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
      d="M5.5 7C5.5 5.34315 6.84315 4 8.5 4C10.1569 4 11.5 5.34315 11.5 7C11.5 8.65685 10.1569 10 8.5 10C6.84315 10 5.5 8.65685 5.5 7ZM8.5 2C5.73858 2 3.5 4.23858 3.5 7C3.5 9.76142 5.73858 12 8.5 12C11.2614 12 13.5 9.76142 13.5 7C13.5 4.23858 11.2614 2 8.5 2ZM15.5 2H14.5V4H15.5C17.1569 4 18.5 5.34315 18.5 7C18.5 8.65685 17.1569 10 15.5 10H14.5V12H15.5C18.2614 12 20.5 9.76142 20.5 7C20.5 4.23858 18.2614 2 15.5 2ZM0 19C0 16.2386 2.23858 14 5 14H12C14.7614 14 17 16.2386 17 19V20V21H15V20V19C15 17.3431 13.6569 16 12 16H5C3.34315 16 2 17.3431 2 19V20V21H0V20V19ZM24 19C24 16.2386 21.7614 14 19 14H18V16H19C20.6569 16 22 17.3431 22 19V20V21H24V20V19Z"
      fill="currentColor"
    />
  </Svg>
);
export { MemberIcon };

export default MemberIcon;
