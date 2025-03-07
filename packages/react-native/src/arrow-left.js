import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeftIcon = (props) => (
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
      d="M19.5002 13L7.91436 13L12.4144 17.5L11.0001 18.9142L4.08594 12L11.0001 5.08582L12.4144 6.50003L7.91436 11L19.5002 11V13Z"
      fill="currentColor"
    />
  </Svg>
);
export { ArrowLeftIcon };

export default ArrowLeftIcon;
