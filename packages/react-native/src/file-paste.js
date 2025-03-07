import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FilePasteIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V23H3V1ZM19 9H13V3H5V21H19V9ZM15 3.41745V7H18.5853L15 3.41745ZM7 10H9.6V12H9V12.6H7V10ZM10.4 10H13V12.6H11V12H10.4V10ZM9 14V13.4H7V16H9.6V14H9ZM11 14H17V20H11V14ZM13 16V18H15V16H13Z"
      fill="currentColor"
    />
  </Svg>
);
export { FilePasteIcon };

export default FilePasteIcon;
