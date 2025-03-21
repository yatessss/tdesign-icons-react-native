import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownRectangleIcon = (props) => (
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
      d="M2 2H22V22H2V2ZM4 4V20H20V4H4ZM13 6.5V14.0858L16 11.0858L17.4142 12.5L12 17.9142L6.58579 12.5L8 11.0858L11 14.0858V6.5H13Z"
      fill="currentColor"
    />
  </Svg>
);
export { ArrowDownRectangleIcon };

export default ArrowDownRectangleIcon;
