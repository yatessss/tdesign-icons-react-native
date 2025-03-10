import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FileExcelIcon = (props) => (
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
      d="M3 1H15.4142L21 6.58579V23H3V1ZM5 3V21H19V9H13V3H5ZM15 3.41421V7H18.5858L15 3.41421ZM15 9.99999L15 11.6465C15 12.1896 14.7792 12.7093 14.3883 13.0862L13.4406 14L14.3883 14.9138C14.7792 15.2907 15 15.8104 15 16.3535V18H13L13 16.3535L12 15.3892L11 16.3535L11 18L9.00001 18L9.00001 16.3535C9.00001 15.8104 9.22083 15.2907 9.61173 14.9138L10.5594 14L9.61174 13.0862C9.22083 12.7093 9.00002 12.1896 9.00001 11.6465L9 10L11 10L11 11.6465L12 12.6108L13 11.6465L13 10L15 9.99999Z"
      fill="currentColor"
    />
  </Svg>
);
export { FileExcelIcon };

export default FileExcelIcon;
