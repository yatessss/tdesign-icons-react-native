import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const City1Icon = (props) => (
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
      d="M2 2H12V10H22V22H2V2ZM12 12V20H16V15H20V12H12ZM20 17H18V20H20V17ZM10 20V4H4V20H10ZM8.00391 6V8.00391H6V6.00391H6.00391V6H8.00391ZM8.00391 11V13.0039H6V11.0039H6.00391V11H8.00391ZM8.00391 16V18.0039H6V16.0039H6.00391V16H8.00391Z"
      fill="currentColor"
    />
  </Svg>
);
export { City1Icon };

export default City1Icon;
