import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LettersUIcon = (props) => (
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
      d="M15 4L15 18H9L9 4L7 4L7 18C7 19.1046 7.89543 20 9 20H17L17 4L15 4Z"
      fill="currentColor"
    />
  </Svg>
);
export { LettersUIcon };

export default LettersUIcon;
