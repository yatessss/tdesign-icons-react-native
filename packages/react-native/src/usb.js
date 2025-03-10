import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const UsbIcon = (props) => (
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
      d="M4 2H20V11H22V22H2V11H4V2ZM4 13V20H20V13H4ZM18 11V4H6V11H18ZM8 6.49609H10.0039V8.5H8V6.49609ZM14 6.49609H16.0039V8.5H14V6.49609Z"
      fill="currentColor"
    />
  </Svg>
);
export { UsbIcon };

export default UsbIcon;
