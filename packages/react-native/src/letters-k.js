import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LettersKIcon = (props) => (
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
      d="M10 20V13.9432L15 17.5146V20H17V17.2573C17 16.7729 16.7661 16.3183 16.3719 16.0367L10.7205 12L16.3719 7.96329C16.7661 7.68172 17 7.22712 17 6.74269V4H15V6.48538L10 10.0568V4H8V20H10Z"
      fill="currentColor"
    />
  </Svg>
);
export { LettersKIcon };

export default LettersKIcon;
