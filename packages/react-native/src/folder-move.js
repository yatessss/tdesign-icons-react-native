import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderMoveIcon = (props) => (
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
      d="M1 2.5H9.48063L11.4806 5H23V21H1V2.5ZM3 4.5V19H21V7H10.5194L8.51937 4.5H3Z"
      fill="currentColor"
    />
    <Path
      d="M8 11.9988H12.6573L11.1914 10.4684L12.6356 9.08489L16.3848 12.9988L12.6356 16.9127L11.1914 15.5292L12.6573 13.9988H8V11.9988Z"
      fill="currentColor"
    />
  </Svg>
);
export { FolderMoveIcon };

export default FolderMoveIcon;
