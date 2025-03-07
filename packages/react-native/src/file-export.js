import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileExportIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V12H19V9H13V3H5V21H11V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM19.05 14.0879L23.9083 19.0021L19.05 23.9163L17.6277 22.5102L20.1073 20.0021L12.998 20.0021V18.0021L20.1073 18.0021L17.6277 15.494L19.05 14.0879Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileExportIcon };

export default FileExportIcon;
