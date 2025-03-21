import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LettersQIcon = (props) => (
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
      d="M9 6L9 18H15L15 6L9 6ZM17 18H18.5V20H8.5C7.67157 20 7 19.3284 7 18.5L7 5.5C7 4.67157 7.67158 4 8.5 4L15.5 4C16.3284 4 17 4.67157 17 5.5L17 18Z"
      fill="currentColor"
    />
  </Svg>
);
export { LettersQIcon };

export default LettersQIcon;
