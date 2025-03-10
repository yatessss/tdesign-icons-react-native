import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SwapIcon = (props) => (
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
      d="M15.0002 3.08569L22.4144 10.4999L2.00015 10.4999V8.4999L17.5859 8.4999L13.5859 4.49991L15.0002 3.08569ZM22.0002 13.4999V15.4999L6.41437 15.4999L10.4144 19.4999L9.00015 20.9141L1.58594 13.4999L22.0002 13.4999Z"
      fill="currentColor"
    />
  </Svg>
);
export { SwapIcon };

export default SwapIcon;
