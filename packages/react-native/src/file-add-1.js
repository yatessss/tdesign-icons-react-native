import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileAdd1Icon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V23H3V1ZM18.5858 7L15 3.41421V7H18.5858ZM13 3H5V21H19V9H13V3ZM13 11V14H16V16H13V19H11V16H8V14H11V11H13Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileAdd1Icon };

export default FileAdd1Icon;
