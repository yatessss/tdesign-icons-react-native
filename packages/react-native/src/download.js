import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DownloadIcon = (props) => (
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
      d="M13 3L13 12.5858L16.5 9.08579L17.9142 10.5L12 16.4142L6.08579 10.5L7.5 9.08579L11 12.5858L11 3L13 3ZM4.5 14V19H19.5V14H21.5V21H2.5V14H4.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { DownloadIcon };

export default DownloadIcon;
