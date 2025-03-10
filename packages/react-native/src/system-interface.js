import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SystemInterfaceIcon = (props) => (
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
      d="M1 1H23V23H1V1ZM3 8.55556V21H21V8.55556H3ZM21 6.55556V3H3V6.55556H21ZM6 11H8.00391V13.0039H6V11ZM10 11H12.0039V13.0039H10V11ZM14 11H16.0039V13.0039H14V11Z"
      fill="currentColor"
    />
  </Svg>
);
export { SystemInterfaceIcon };

export default SystemInterfaceIcon;
