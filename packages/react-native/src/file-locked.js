import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileLockedIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V11H19V9H13V3H5V21H11.5V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM18 14.5C18.6904 14.5 19.25 15.0596 19.25 15.75V16.5H16.75V15.75C16.75 15.0596 17.3096 14.5 18 14.5ZM21.25 16.5V15.75C21.25 13.9551 19.7949 12.5 18 12.5C16.2051 12.5 14.75 13.9551 14.75 15.75V16.5H13.499V23H22.499V16.5H21.25ZM20.499 18.5V21H15.499V18.5H20.499Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileLockedIcon };

export default FileLockedIcon;
