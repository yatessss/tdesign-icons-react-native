import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FolderDetailsIcon = (props) => (
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
      d="M1 2.5H9.48063L11.4806 5H23V21H1V2.5ZM3 4.5V19H21V7H10.5194L8.51937 4.5H3ZM6.99805 11.998H9.00195V14.002H6.99805V11.998ZM10.998 11.998H13.002V14.002H10.998V11.998ZM14.998 11.998H17.002V14.002H14.998V11.998Z"
      fill="currentColor"
    />
  </Svg>
);
export { FolderDetailsIcon };

export default FolderDetailsIcon;
