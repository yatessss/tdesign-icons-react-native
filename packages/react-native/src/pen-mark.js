import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PenMarkIcon = (props) => (
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
      d="M23.5548 6.87928L17.3278 0.652344L3.97906 14.0011L3.41366 16.8281L7.37901 20.7935L10.206 20.2281L23.5548 6.87928ZM20.7263 6.87928L9.21997 18.3857L8.03636 18.6224L5.58474 16.1708L5.82146 14.9871L17.3278 3.48077L20.7263 6.87928ZM1.38574 19.6129L4.59423 22.8214L6.00844 21.4072L2.79996 18.1987L1.38574 19.6129Z"
      fill="currentColor"
    />
  </Svg>
);
export { PenMarkIcon };

export default PenMarkIcon;
