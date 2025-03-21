import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LettersOIcon = (props) => (
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
      d="M9 18L9 6L15 6V18H9ZM7 6L7 18C7 19.1046 7.89543 20 9 20H15C16.1046 20 17 19.1046 17 18L17 6C17 4.89543 16.1046 4 15 4L9 4C7.89543 4 7 4.89543 7 6Z"
      fill="currentColor"
    />
  </Svg>
);
export { LettersOIcon };

export default LettersOIcon;
