import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Numbers01Icon = (props) => (
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
      d="M17 9C17 6.23858 14.7614 4 12 4H11V4.10002C8.71776 4.56329 7 6.58104 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V9ZM12 6C13.6569 6 15 7.34315 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V9C9 7.34315 10.3431 6 12 6Z"
      fill="currentColor"
    />
  </Svg>
);
export { Numbers01Icon };

export default Numbers01Icon;
