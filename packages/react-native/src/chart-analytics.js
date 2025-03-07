import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChartAnalyticsIcon = (props) => (
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
      d="M4 2V20H22V22H2V2H4ZM16 6H22V12H20V9.4229L18.4211 10.9977C17.2545 12.1614 16.127 13.2863 15.7071 13.7062L15 14.4133L11 10.4133L6 15.4133L4.58579 13.9991L11 7.58486L15.0005 11.5853C15.5395 11.0473 16.2665 10.322 17.0086 9.58169L18.5945 8H16V6Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChartAnalyticsIcon };

export default ChartAnalyticsIcon;
