import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CastIcon = (props) => (
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
      d="M1 3H23V21H13V19H21V5H3V9H1V3ZM1 11H2C6.97056 11 11 15.0294 11 20V21H9V20C9 16.134 5.86599 13 2 13H1V11ZM1 15H2C4.76142 15 7 17.2386 7 20V21H5V20C5 18.3431 3.65685 17 2 17H1V15ZM1 19H3.00391V21.0039H1V19Z"
      fill="currentColor"
    />
  </Svg>
);
export { CastIcon };

export default CastIcon;
