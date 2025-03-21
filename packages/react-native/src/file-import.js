import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileImportIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V23H12V21H19V9H13V3H5V13H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM7.04998 14.0879L11.9083 19.0021L7.04999 23.9163L5.62771 22.5102L8.10728 20.0021L0.998047 20.0021L0.998047 18.0021L8.10728 18.0021L5.62771 15.494L7.04998 14.0879Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileImportIcon };

export default FileImportIcon;
