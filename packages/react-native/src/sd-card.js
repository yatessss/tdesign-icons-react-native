import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SdCardIcon = (props) => (
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
      d="M5 1H21V23H3V11.5858L5 9.58579V1ZM7 3V10.4142L5 12.4142V21H19V3H7ZM11 5V8H9V5H11ZM14 5V8H12V5H14ZM17 5V8H15V5H17Z"
      fill="currentColor"
    />
  </Svg>
);
export { SdCardIcon };

export default SdCardIcon;
