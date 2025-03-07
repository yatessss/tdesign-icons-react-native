import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BulletpointIcon = (props) => (
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
      d="M3 6.00391H2V5.00391V5V4H3H3.00391H4.00391V5V5.00391V6.00391H3.00391H3ZM3 13.0039H2V12.0039V12V11H3H3.00391H4.00391V12V12.0039V13.0039H3.00391H3ZM2 20.0039H3H3.00391H4.00391V19.0039V19V18H3.00391H3H2V19V19.0039V20.0039ZM8 4H7V6H8H21H22V4H21H8ZM7 11H8H21H22V13H21H8H7V11ZM8 18H7V20H8H21H22V18H21H8Z"
      fill="currentColor"
    />
  </Svg>
);
export { BulletpointIcon };

export default BulletpointIcon;
