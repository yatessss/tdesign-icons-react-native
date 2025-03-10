import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FlightTakeoffIcon = (props) => (
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
      d="M8.32444 2.38745L15.0314 8.87253L19.9903 7.5438C21.324 7.18644 22.6948 7.9779 23.0522 9.31157C23.4095 10.6452 22.6181 12.0161 21.2844 12.3734L3.58883 17.1149L0.424805 10.7158L3.59883 9.86533L5.27558 11.4866L8.61095 10.5929L4.60855 3.38312L8.32444 2.38745ZM7.60046 4.65199L11.6029 11.8618L4.69942 13.7115L3.6221 12.6699L4.65494 14.7587L20.7668 10.4416C21.0335 10.3701 21.1918 10.0959 21.1203 9.8292C21.0488 9.56247 20.7747 9.40418 20.5079 9.47565L14.4553 11.0975L7.74828 4.61238L7.60046 4.65199ZM1.99956 18.9999H21.9996V20.9999H1.99956V18.9999Z"
      fill="currentColor"
    />
  </Svg>
);
export { FlightTakeoffIcon };

export default FlightTakeoffIcon;
