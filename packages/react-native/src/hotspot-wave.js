import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HotspotWaveIcon = (props) => (
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
      d="M12 0H13C17.9706 0 22 4.02944 22 9V10H20V9C20 5.13401 16.866 2 13 2H12V0ZM4 2H10V4H6V22H18V12H20V24H4V2ZM12 4H13C15.7614 4 18 6.23858 18 9V10H16V9C16 7.34315 14.6569 6 13 6H12V4ZM12 8H14.0039V10.0039H12V8Z"
      fill="currentColor"
    />
  </Svg>
);
export { HotspotWaveIcon };

export default HotspotWaveIcon;
