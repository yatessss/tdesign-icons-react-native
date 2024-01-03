import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const KeyboardIcon = (props) => (
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
      d="M1 3H23V21H1V3ZM3 5V19H21V5H3ZM4.99609 7.5H7V9.50391H4.99609V7.5ZM8.99609 7.5H11V9.50391H8.99609V7.5ZM12.9961 7.5H15V9.50391H12.9961V7.5ZM16.9961 7.5H19V9.50391H16.9961V7.5ZM4.99609 10.5H7V12.5039H4.99609V10.5ZM8.99609 10.5H11V12.5039H8.99609V10.5ZM12.9961 10.5H15V12.5039H12.9961V10.5ZM16.9961 10.5H19V12.5039H16.9961V10.5ZM5 15H19V17H5V15Z"
      fill="currentColor"
    />
  </Svg>
);
export { KeyboardIcon };

export default KeyboardIcon;
