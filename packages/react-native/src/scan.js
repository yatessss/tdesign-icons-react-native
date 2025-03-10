import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ScanIcon = (props) => (
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
      d="M2 2H9V4H4V9H2V2ZM15 2H22V9H20V4H15V2ZM2 11H22V13H2V11ZM4 15V20H9V22H2V15H4ZM22 15V22H15V20H20V15H22Z"
      fill="currentColor"
    />
  </Svg>
);
export { ScanIcon };

export default ScanIcon;
