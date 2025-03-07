import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileCode1Icon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V23H3V1ZM5 3V21H19V9H13V3H5ZM15 3.41421V7H18.5858L15 3.41421ZM11.2072 12.2072L9.41429 14.0001L11.2072 15.793L9.79298 17.2072L6.58586 14.0001L9.79297 10.793L11.2072 12.2072ZM14.207 10.793L17.4141 14.0001L14.207 17.2072L12.7928 15.793L14.5857 14.0001L12.7928 12.2072L14.207 10.793Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileCode1Icon };

export default FileCode1Icon;
