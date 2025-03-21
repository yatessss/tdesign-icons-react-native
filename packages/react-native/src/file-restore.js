import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileRestoreIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V12H19V9H13V3H5V21H12V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM18.4142 13L17.4142 14H18C20.7614 14 23 16.2386 23 19C23 21.7614 20.7614 24 18 24C15.2386 24 13 21.7614 13 19V18H15V19C15 20.6569 16.3431 22 18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16H17.4142L18.4142 17L17 18.4142L13.5858 15L17 11.5858L18.4142 13Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileRestoreIcon };

export default FileRestoreIcon;
