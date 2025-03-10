import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderImportIcon = (props) => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <Path
      d="M2 2.5H10.4806L12.4806 5H24V21H13V19H22V7H11.5194L9.51937 4.5H4V12.75H2V2.5ZM7.04998 13.0878L11.9083 18.002L7.04999 22.9162L5.62771 21.5101L8.10728 19.002L0.998047 19.002L0.998047 17.002L8.10728 17.002L5.62771 14.4939L7.04998 13.0878Z"
      fill="currentColor"
    />
  </Svg>
);
export { FolderImportIcon };

export default FolderImportIcon;
