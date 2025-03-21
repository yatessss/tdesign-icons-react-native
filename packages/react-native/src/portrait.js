import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PortraitIcon = (props) => (
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
      d="M2 2H9V4H4V9H2V2ZM15 2H22V9H20V4H15V2ZM12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.1716 11.5 10.5 10.8284 10.5 10C10.5 9.17157 11.1716 8.5 12 8.5ZM14.6652 12.2688C15.1858 11.6578 15.5 10.8656 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.067 6.5 8.5 8.067 8.5 10C8.5 10.8656 8.81422 11.6578 9.33483 12.2688C7.93188 13.1543 7 14.7183 7 16.5V17.5H9V16.5C9 14.8431 10.3431 13.5 12 13.5C13.6569 13.5 15 14.8431 15 16.5V17.5H17V16.5C17 14.7183 16.0681 13.1543 14.6652 12.2688ZM4 15V20H9V22H2V15H4ZM22 15V22H15V20H20V15H22Z"
      fill="currentColor"
    />
  </Svg>
);
export { PortraitIcon };

export default PortraitIcon;
