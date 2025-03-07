import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CoordinateSystemIcon = (props) => (
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
      d="M11.9995 1L23.2579 20.5H0.741211L11.9995 1ZM4.20531 18.5H19.7938L11.9995 5L4.20531 18.5ZM12.9995 9V12.5316L16.4079 15.372L15.1276 16.9084L11.9995 14.3017L8.8715 16.9084L7.59114 15.372L10.9995 12.5316V9H12.9995Z"
      fill="currentColor"
    />
  </Svg>
);
export { CoordinateSystemIcon };

export default CoordinateSystemIcon;
