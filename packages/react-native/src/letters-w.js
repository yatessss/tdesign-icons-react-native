import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LettersWIcon = (props) => (
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
      d="M6 4L6 18H11L11 4L13 4L13 18H18V4L20 4V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18L4 4L6 4Z"
      fill="currentColor"
    />
  </Svg>
);
export { LettersWIcon };

export default LettersWIcon;
