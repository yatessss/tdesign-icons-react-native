import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileUnlockedIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V11H19V9H13V3H5V21H11.5V23H3V1ZM15 3.41421V7H18.5858L15 3.41421ZM18 14.5C17.3096 14.5 16.75 15.0596 16.75 15.75V16.5H22.499V23H13.499V16.5H14.75V15.75C14.75 13.9551 16.2051 12.5 18 12.5C18.8936 12.5 19.7045 12.8619 20.291 13.4448L21.0003 14.1498L19.5904 15.5683L18.8811 14.8634C18.6541 14.6377 18.3441 14.5 18 14.5ZM15.499 18.5V21H20.499V18.5H15.499Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileUnlockedIcon };

export default FileUnlockedIcon;
