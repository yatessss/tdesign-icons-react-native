import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ShrinkHorizontalIcon = (props) => (
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
      d="M1.5 11L6.58579 11L4.08579 8.5L5.5 7.08579L10.4142 12L5.5 16.9142L4.08579 15.5L6.58578 13L1.5 13L1.5 11ZM13 3V21H11V3L13 3ZM13.5858 12L18.5 7.08579L19.9142 8.5L17.4142 11L22.5 11V13L17.4142 13L19.9142 15.5L18.5 16.9142L13.5858 12Z"
      fill="currentColor"
    />
  </Svg>
);
export { ShrinkHorizontalIcon };

export default ShrinkHorizontalIcon;
