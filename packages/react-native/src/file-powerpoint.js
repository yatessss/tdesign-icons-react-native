import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FilePowerpointIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V23H3V1ZM5 3V21H19V9H13V3H5ZM15 3.41421V7H18.5858L15 3.41421ZM9 10H13C14.1046 10 15 10.8954 15 12V13.6C15 14.7046 14.1046 15.6 13 15.6H11V18H9V10ZM11 13.6L13 13.6V12H11V13.6Z"
      fill="currentColor"
    />
  </Svg>
);
export { FilePowerpointIcon };

export default FilePowerpointIcon;
