import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileImageIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V23H3V1ZM5 3V21H19V9H13V3H5ZM15 3.41421V7H18.5858L15 3.41421ZM8 11H10.0039V13.0039H8V11ZM12.7279 12.9376L16.7903 17L15.3761 18.4142L12.7283 15.7665L11.1163 17.3794L10.4645 16.5951L9.76475 17.2717L8.62222 18.4142L7.20801 17L8.36237 15.8456L10.6243 13.6583L11.2524 14.414L12.7279 12.9376Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileImageIcon };

export default FileImageIcon;
