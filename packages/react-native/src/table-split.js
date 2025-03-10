import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TableSplitIcon = (props) => (
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
      d="M2 2H22V22H2V2ZM4 4V6H11V4H4ZM13 4V6H20V4H13ZM20 8H4V20H20V8ZM10.998 9.99805H13.002V12.002H10.998V9.99805ZM4.99805 12.998H7.00195V15.002H4.99805V12.998ZM7.99805 12.998H10.002V15.002H7.99805V12.998ZM10.998 12.998H13.002V15.002H10.998V12.998ZM13.998 12.998H16.002V15.002H13.998V12.998ZM16.998 12.998H19.002V15.002H16.998V12.998ZM10.998 15.998H13.002V18.002H10.998V15.998Z"
      fill="currentColor"
    />
  </Svg>
);
export { TableSplitIcon };

export default TableSplitIcon;
