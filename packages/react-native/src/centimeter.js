import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CentimeterIcon = (props) => (
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
      d="M11 4L21 4C22.1046 4 23 4.89543 23 6V20H21L21 6L18 6L18 20H16L16 6L13 6L13 20H11L11 4ZM1 6C1 4.89543 1.89543 4 3 4H10V6L3 6V18H10V20H3C1.89543 20 1 19.1046 1 18V6Z"
      fill="currentColor"
    />
  </Svg>
);
export { CentimeterIcon };

export default CentimeterIcon;
