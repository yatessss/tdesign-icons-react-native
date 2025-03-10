import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderExportIcon = (props) => (
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
      d="M1 2.5H9.48063L11.4806 5H23V13H21V7H10.5194L8.51937 4.5H3V19H11.5V21H1V2.5ZM19.05 13.0878L23.9083 18.002L19.05 22.9162L17.6277 21.5101L20.1073 19.002L12.998 19.002V17.002L20.1073 17.002L17.6277 14.4939L19.05 13.0878Z"
      fill="currentColor"
    />
  </Svg>
);
export { FolderExportIcon };

export default FolderExportIcon;
