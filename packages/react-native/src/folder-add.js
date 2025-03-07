import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderAddIcon = (props) => (
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
      d="M1 2.5L9.48063 2.5L11.4806 5H23V12H21V7H10.5194L8.51938 4.5L3 4.5L3 19H14V21H1L1 2.5ZM21 14V17H24V19H21V22H19V19H16V17H19V14H21Z"
      fill="currentColor"
    />
  </Svg>
);
export { FolderAddIcon };

export default FolderAddIcon;
