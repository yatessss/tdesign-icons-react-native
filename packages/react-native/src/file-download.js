import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileDownloadIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V11.5H19V9H13V3H5V21H13V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM20 13V20.1092L22.5081 17.6297L23.9142 19.0519L19 23.9103L14.0858 19.0519L15.4919 17.6297L18 20.1092V13H20Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileDownloadIcon };

export default FileDownloadIcon;
