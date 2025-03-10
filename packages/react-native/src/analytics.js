import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AnalyticsIcon = (props) => (
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
      d="M2 2H22V22H2V2ZM4 4V20H20V4H4ZM18 8V11H16V8H18ZM13 10V13H11V10H13ZM8 12V18H6V12H8ZM18 13V18H16V13H18ZM13 15V18H11V15H13Z"
      fill="currentColor"
    />
  </Svg>
);
export { AnalyticsIcon };

export default AnalyticsIcon;
