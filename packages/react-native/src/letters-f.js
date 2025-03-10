import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LettersFIcon = (props) => (
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
      d="M8 6C8 4.89543 8.89543 4 10 4H17V6H10V11H17V13H10V20H8V6Z"
      fill="currentColor"
    />
  </Svg>
);
export { LettersFIcon };

export default LettersFIcon;
