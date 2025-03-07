import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Dam5Icon = (props) => (
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
      d="M2 2H22V4H21V20H22V22H2V20H3V4H2V2ZM5 4V20H6.99914L7 4.00031L5 4ZM9 4.00031V10.9996C9.83566 10.3719 10.8744 10 12 10C13.1256 10 14.1643 10.3719 15 10.9996V4L9 4.00031ZM17 4V20H19V4H17ZM15 20V15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15V20H15Z"
      fill="currentColor"
    />
  </Svg>
);
export { Dam5Icon };

export default Dam5Icon;
