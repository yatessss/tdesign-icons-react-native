import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderLockedIcon = (props) => (
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
      d="M1 2.5H9.48063L11.4806 5H23V10H21V7H10.5194L8.51937 4.5H3V19H13V21H1V2.5ZM19.5 13.5C20.1904 13.5 20.75 14.0596 20.75 14.75V15.5H18.25V14.75C18.25 14.0596 18.8096 13.5 19.5 13.5ZM22.75 15.5V14.75C22.75 12.9551 21.2949 11.5 19.5 11.5C17.7051 11.5 16.25 12.9551 16.25 14.75V15.5H14.999V22H23.999V15.5H22.75ZM21.999 17.5V20H16.999V17.5H21.999Z"
      fill="currentColor"
    />
  </Svg>
);
export { FolderLockedIcon };

export default FolderLockedIcon;
