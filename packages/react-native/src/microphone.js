import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MicrophoneIcon = (props) => (
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
      d="M5 7C5 3.68629 7.68629 1 11 1H13C16.3137 1 19 3.68629 19 7V13C19 13.4097 18.9588 13.8107 18.88 14.1989C18.324 16.938 15.9039 19 13 19V20H18V22H6V20H11V19C8.09609 19 5.67601 16.938 5.12 14.1989C5.0412 13.8107 5 13.4097 5 13V7ZM7 11.5V13H10V15H7.53482C8.22659 16.1956 9.52002 17 11 17H13C14.48 17 15.7734 16.1956 16.4652 15H14V13H17V11.5H14V9.5H17V8H14V6H16.874C16.4299 4.27477 14.8638 3 13 3H11C9.13616 3 7.57006 4.27477 7.12602 6H10V8H7V9.5H10V11.5H7Z"
      fill="currentColor"
    />
  </Svg>
);
export { MicrophoneIcon };

export default MicrophoneIcon;
