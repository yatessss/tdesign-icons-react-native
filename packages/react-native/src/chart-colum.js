import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartColumIcon = (props) => (
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
      d="M4 2V4L19 4V10H4V12L15 12V18H4V20H22V22H2L2 2L4 2ZM4 16L13 16V14L4 14L4 16ZM4 8L17 8V6L4 6L4 8Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChartColumIcon };

export default ChartColumIcon;
