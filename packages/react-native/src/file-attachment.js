import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileAttachmentIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V12H19V9H13V3H5V21H12V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V20H17V15.5C17 15.2239 16.7761 15 16.5 15C16.2239 15 16 15.2239 16 15.5V20C16 21.1046 16.8954 22 18 22C19.1046 22 20 21.1046 20 20V16H22V20C22 22.2091 20.2091 24 18 24C15.7909 24 14 22.2091 14 20V15.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileAttachmentIcon };

export default FileAttachmentIcon;
