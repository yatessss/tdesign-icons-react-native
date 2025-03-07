import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LettersGIcon = (props) => (
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
      d="M16 4H8.5C7.67157 4 7 4.67157 7 5.5V18.5C7 19.3284 7.67157 20 8.5 20H17V11H11.8V13H15V18H9V6H16V4Z"
      fill="currentColor"
    />
  </Svg>
);
export { LettersGIcon };

export default LettersGIcon;
