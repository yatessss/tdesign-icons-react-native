import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileCopyIcon = (props) => (
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
      d="M6 1H15.4142L21 6.58579V19H6V1ZM8 3V17H19V9H13V3H8ZM15 3.41421V7H18.5858L15 3.41421ZM4 5V21H15V23H2V5H4Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileCopyIcon };

export default FileCopyIcon;
