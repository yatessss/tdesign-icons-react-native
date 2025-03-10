import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileIconIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V11H19V9H13V3H5V21H21V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM8 12V20H6V12H8ZM8.50002 14C8.50002 12.8954 9.39545 12 10.5 12H12V14H10.5V18H12V20H10.5C9.39545 20 8.50002 19.1046 8.50002 18V14ZM12.5 14C12.5 12.8954 13.3954 12 14.5 12H15.5C16.6046 12 17.5 12.8954 17.5 14V18C17.5 19.1046 16.6046 20 15.5 20H14.5C13.3954 20 12.5 19.1046 12.5 18V14ZM18 12H21C22.1046 12 23 12.8954 23 14V20H21V14H20V20H18V12ZM14.5 14V18H15.5V14H14.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileIconIcon };

export default FileIconIcon;
