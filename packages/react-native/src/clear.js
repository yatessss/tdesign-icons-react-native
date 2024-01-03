import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ClearIcon = (props) => (
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
      d="M9 1L15 1L15 9.5L21 9.5L21 23L3 23L3 9.5L9 9.5L9 1ZM11 3L11 11.5L5 11.5V14L19 14L19 11.5H13L13 3L11 3ZM19 16L5 16L5 21H14V18L16 18V21H19V16Z"
      fill="currentColor"
    />
  </Svg>
);
export { ClearIcon };

export default ClearIcon;
