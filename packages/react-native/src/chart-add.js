import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartAddIcon = (props) => (
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
      d="M20 0V3H23V5H20V8H18V5H15V3H18V0H20ZM2 2H13V4H4V20H20V10H22V22H2V2ZM13 8V18H11V8H13ZM8 11V18H6V11H8ZM18 13V18H16V13H18Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChartAddIcon };

export default ChartAddIcon;
