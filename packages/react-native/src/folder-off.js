import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderOffIcon = (props) => (
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
      d="M9.48159 2.5L11.4816 5L14.001 5V7L10.5203 7L8.52034 4.5L3.00106 4.5L3 15.998L3 15.9991L3 16.0013L3.00276 17.4134L1.00324 19.413L1 16.002L1 16.0009L1.00089 2.5H9.48159Z"
      fill="currentColor"
    />
    <Path
      d="M21.4142 4L20.4142 5H23V20H5.4142L2.99999 22.4142L1.58577 21L20 2.58579L21.4142 4ZM18.4142 7L7.4142 18H21V7H18.4142Z"
      fill="currentColor"
    />
  </Svg>
);
export { FolderOffIcon };

export default FolderOffIcon;
