import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CenterFocusStrongIcon = (props) => (
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
      d="M2 2H9V4H4V9H2V2ZM15 2H22V9H20V4H15V2ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM4 15V20H9V22H2V15H4ZM22 15V22H15V20H20V15H22Z"
      fill="currentColor"
    />
  </Svg>
);
export { CenterFocusStrongIcon };

export default CenterFocusStrongIcon;
