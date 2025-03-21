import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PasteIcon = (props) => (
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
      d="M2 2L7 2V4H4L4 7L2 7L2 2ZM11 2L16 2V7H14V4L11 4V2ZM9 9H22V22H9V9ZM11 11V20H20V11H11ZM4 10V13H7V15H2V10H4Z"
      fill="currentColor"
    />
  </Svg>
);
export { PasteIcon };

export default PasteIcon;
