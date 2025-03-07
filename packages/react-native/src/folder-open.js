import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderOpenIcon = (props) => (
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
      d="M1 2.5L11.4806 2.5L13.4806 5H23V7H12.5194L10.5194 4.5L1 4.5L1 2.5ZM1 6.5L9.48063 6.5L11.4806 9H23V21H1L1 6.5ZM3 8.5L3 19H21V11H10.5194L8.51938 8.5L3 8.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { FolderOpenIcon };

export default FolderOpenIcon;
