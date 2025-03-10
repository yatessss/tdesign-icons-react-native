import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileWordIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V23H3V1ZM5 3V21H19V9H13V3H5ZM15 3.41421V7H18.5858L15 3.41421ZM10 11V16H11L11 11H13L13 16H14V11H16V16C16 17.1046 15.1046 18 14 18H10C8.89543 18 8 17.1046 8 16V11H10Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileWordIcon };

export default FileWordIcon;
