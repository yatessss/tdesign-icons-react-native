import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Barcode1Icon = (props) => (
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
      d="M2 2H9V4H4V9H2V2ZM15 2H22V9H20V4H15V2ZM9 8L9 16H7L7 8H9ZM13 8V16H11V8H13ZM17 8V16H15V8H17ZM4 15V20H9V22H2V15H4ZM22 15V22H15V20H20V15H22Z"
      fill="currentColor"
    />
  </Svg>
);
export { Barcode1Icon };

export default Barcode1Icon;
