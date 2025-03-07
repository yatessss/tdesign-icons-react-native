import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RotationIcon = (props) => (
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
      d="M4 2V11C8.97056 11 13 15.0294 13 20H22V22H2V2H4ZM4 20H11C11 16.134 7.86599 13 4 13V20Z"
      fill="currentColor"
    />
  </Svg>
);
export { RotationIcon };

export default RotationIcon;
