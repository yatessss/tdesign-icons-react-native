import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BackwardIcon = (props) => (
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
      d="M11.2502 4.33594V11.3359L18.2502 4.33594V19.6644L11.2502 12.6644V19.6644L3.58594 12.0002L11.2502 4.33594ZM6.41436 12.0002L9.25015 14.8359V9.16436L6.41436 12.0002ZM13.4144 12.0002L16.2502 14.8359V9.16436L13.4144 12.0002Z"
      fill="currentColor"
    />
  </Svg>
);
export { BackwardIcon };

export default BackwardIcon;
