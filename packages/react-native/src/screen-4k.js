import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Screen4kIcon = (props) => (
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
      d="M1 3L23 3V21H1L1 3ZM3 5L3 19H21V5L3 5ZM15 8V10.0476L16 9.33979V8H18V9.59847C18 10.0852 17.7638 10.5416 17.3666 10.8228L15.7034 12L17.3666 13.1772C17.7639 13.4584 18 13.9148 18 14.4015V16H16V14.6602L15 13.9524V16H13V8H15ZM7 8V11.4286H9V8H11V16H9V13.4286H7C5.89543 13.4286 5 12.5331 5 11.4286V8H7Z"
      fill="currentColor"
    />
  </Svg>
);
export { Screen4kIcon };

export default Screen4kIcon;
