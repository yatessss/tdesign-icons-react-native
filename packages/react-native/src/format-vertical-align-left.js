import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FormatVerticalAlignLeftIcon = (props) => (
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
      d="M2 4H3H21H22V6H21H3H2V4ZM2 11H3H15H16V13H15H3H2V11ZM3 18H2V20H3H21H22V18H21H3Z"
      fill="currentColor"
    />
  </Svg>
);
export { FormatVerticalAlignLeftIcon };

export default FormatVerticalAlignLeftIcon;
