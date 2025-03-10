import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HdIcon = (props) => (
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
      d="M1 3L23 3V21H1L1 3ZM3 5L3 19H21V5L3 5ZM7 8V11H9V8H11V16H9V13H7V16H5V8H7ZM13 8H17C18.1046 8 19 8.89543 19 10V14C19 15.1046 18.1046 16 17 16H13V8ZM15 10V14H17V10H15Z"
      fill="currentColor"
    />
  </Svg>
);
export { HdIcon };

export default HdIcon;
