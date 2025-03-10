import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileZipIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V23H3V1ZM5 3V21H19V9H13V3H11.0039V5.00391H9.00391V7H11.0039V9.00391H9.00391V11H11.0039V13.0039H9.00391V15.0039H7V13H9V11.0039H7V9H9V7.00391H7V5H9V3H5ZM15 3.41421V7H18.5858L15 3.41421Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileZipIcon };

export default FileZipIcon;
