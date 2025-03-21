import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CreditcardAddIcon = (props) => (
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
      d="M1 3L23 3V12H21V11H3L3 19H14V21H1L1 3ZM3 9H21V5L3 5L3 9ZM5 14H10V16H5V14ZM21 14V17H24V19H21V22H19V19H16V17H19V14H21Z"
      fill="currentColor"
    />
  </Svg>
);
export { CreditcardAddIcon };

export default CreditcardAddIcon;
