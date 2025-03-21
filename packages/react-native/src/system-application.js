import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SystemApplicationIcon = (props) => (
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
      d="M22 13V22H2L2 13L22 13ZM20 15L4 15L4 20H20V15ZM22 2V11L2 11L2 2L22 2ZM20 4L4 4L4 9L20 9V4ZM7.50391 16.5L7.50391 18.5039H5.5V16.5H7.50391ZM7.50391 5.5L7.50391 7.50391H5.5V5.5L7.50391 5.5Z"
      fill="currentColor"
    />
    <Path d="M11.5039 7.50391V5.5H9.5V7.50391H11.5039Z" fill="currentColor" />
    <Path d="M11.5039 18.5039V16.5H9.5V18.5039H11.5039Z" fill="currentColor" />
  </Svg>
);
export { SystemApplicationIcon };

export default SystemApplicationIcon;
