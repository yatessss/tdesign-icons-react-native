import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileSearchIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V11.5H19V9H13V3H5V21H12.5V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM17.25 14.5C15.7312 14.5 14.5 15.7312 14.5 17.25C14.5 18.7688 15.7312 20 17.25 20C18.7688 20 20 18.7688 20 17.25C20 15.7312 18.7688 14.5 17.25 14.5ZM12.5 17.25C12.5 14.6266 14.6266 12.5 17.25 12.5C19.8734 12.5 22 14.6266 22 17.25C22 18.2002 21.721 19.0852 21.2405 19.8276L22.9142 21.499L21.501 22.9142L19.826 21.2415C19.0839 21.7214 18.1995 22 17.25 22C14.6266 22 12.5 19.8734 12.5 17.25Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileSearchIcon };

export default FileSearchIcon;
