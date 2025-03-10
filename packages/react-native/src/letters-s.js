import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LettersSIcon = (props) => (
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
      d="M7.5 6C7.5 4.89543 8.39543 4 9.5 4H16V6H9.5V11H14.5C15.6046 11 16.5 11.8954 16.5 13V18C16.5 19.1046 15.6046 20 14.5 20H8V18H14.5V13H9.5C8.39543 13 7.5 12.1046 7.5 11V6Z"
      fill="currentColor"
    />
  </Svg>
);
export { LettersSIcon };

export default LettersSIcon;
