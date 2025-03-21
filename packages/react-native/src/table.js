import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TableIcon = (props) => (
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
      d="M2 22L22 22L22 2L2 2L2 22ZM4 20L4 15H8L8 20H4ZM10 20V15L14 15L14 20H10ZM16 20L16 15H20V20H16ZM20 13L16 13V8L20 8L20 13ZM20 6L4 6V4L20 4V6ZM4 8L8 8L8 13L4 13L4 8ZM10 13L10 8H14V13H10Z"
      fill="currentColor"
    />
  </Svg>
);
export { TableIcon };

export default TableIcon;
