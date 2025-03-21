import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LettersAIcon = (props) => (
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
      d="M17 20V6C17 4.89543 16.1046 4 15 4L9 4C7.89543 4 7 4.89543 7 6L7 20H9V13H15V20H17ZM15 11H9L9 6H15L15 11Z"
      fill="currentColor"
    />
  </Svg>
);
export { LettersAIcon };

export default LettersAIcon;
