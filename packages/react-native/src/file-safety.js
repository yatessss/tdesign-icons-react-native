import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileSafetyIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V11.5H19V9H13V3H5V21H11.5V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM13.498 13.5H22.498V19.1336C22.498 20.1466 21.9868 21.0912 21.1388 21.6452L17.998 23.6969L14.8573 21.6452C14.0093 21.0912 13.498 20.1466 13.498 19.1336V13.5ZM15.498 15.5V19.1336C15.498 19.4713 15.6685 19.7861 15.9511 19.9708L17.998 21.308L20.045 19.9708C20.3276 19.7861 20.498 19.4713 20.498 19.1336V15.5H15.498Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileSafetyIcon };

export default FileSafetyIcon;
