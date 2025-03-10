import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Microphone1Icon = (props) => (
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
      d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V6ZM12 3C10.3431 3 9 4.34315 9 6V11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11V6C15 4.34315 13.6569 3 12 3ZM6 10V11C6 14.3137 8.68629 17 12 17C15.3137 17 18 14.3137 18 11V10H20V11C20 15.0796 16.9463 18.446 13 18.9381V20H18V22H6V20H11V18.9381C7.05369 18.446 4 15.0796 4 11V10H6Z"
      fill="currentColor"
    />
  </Svg>
);
export { Microphone1Icon };

export default Microphone1Icon;
