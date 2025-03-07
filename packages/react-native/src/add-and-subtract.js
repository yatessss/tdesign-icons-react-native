import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AddAndSubtractIcon = (props) => (
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
      d="M13 1V9H21V11H13L13 19H11V11H3V9H11V1L13 1ZM3 20L21 20V22L3 22L3 20Z"
      fill="currentColor"
    />
  </Svg>
);
export { AddAndSubtractIcon };

export default AddAndSubtractIcon;
