import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CastleIcon = (props) => (
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
      d="M7 2V4H9V2H11V4H13V2H15V4H17V2H19V14H21V13H23V22H1V13H3V14H5V2H7ZM5 16H3V20H5V16ZM7 20H9V13H15V20H17V6H7V20ZM19 20H21V16H19V20ZM13 20V15H11V20H13Z"
      fill="currentColor"
    />
  </Svg>
);
export { CastleIcon };

export default CastleIcon;
