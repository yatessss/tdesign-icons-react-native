import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronLeftDoubleIcon = (props) => (
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
      d="M18.4144 7.50003L13.9144 12L18.4144 16.5L17.0001 17.9142L11.0859 12L17.0002 6.08582L18.4144 7.50003ZM11.9144 7.50003L7.41436 12L11.9144 16.5L10.5002 17.9142L4.58594 12L10.5002 6.08582L11.9144 7.50003Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChevronLeftDoubleIcon };

export default ChevronLeftDoubleIcon;
