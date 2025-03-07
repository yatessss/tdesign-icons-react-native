import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ComponentSpaceIcon = (props) => (
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
      d="M2 3L22 3V11L2 11L2 3ZM4 5L4 9L20 9V5L4 5ZM2 13L22 13L22 21L2 21L2 13ZM4 15L4 19L20 19V15L4 15Z"
      fill="currentColor"
    />
  </Svg>
);
export { ComponentSpaceIcon };

export default ComponentSpaceIcon;
