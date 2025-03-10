import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderZipIcon = (props) => (
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
      d="M1 2.5H9.48063L11.4806 5H23V21H1V2.5ZM3 4.5V19H14V17H16V15.0039H14V13H16V11.0039H14V9H16V7H10.5194L8.51937 4.5H3ZM16.0039 9.00391V11H18.0039V13.0039H16.0039V15H18.0039V17.0039H16.0039V19H21V7H18.0039V9.00391H16.0039Z"
      fill="currentColor"
    />
  </Svg>
);
export { FolderZipIcon };

export default FolderZipIcon;
