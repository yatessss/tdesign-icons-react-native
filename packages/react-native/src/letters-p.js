import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LettersPIcon = (props) => (
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
      d="M7 4H15C16.1046 4 17 4.89543 17 6V11.5C17 12.6046 16.1046 13.5 15 13.5H9V20H7V4ZM9 11.5H15V6H9V11.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { LettersPIcon };

export default LettersPIcon;
