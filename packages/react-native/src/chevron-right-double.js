import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronRightDoubleIcon = (props) => (
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
      d="M5.58594 16.5L10.0859 12L5.58594 7.50003L7.00015 6.08582L12.9144 12L7.00015 17.9142L5.58594 16.5ZM12.0859 16.5L16.5859 12L12.0859 7.50003L13.5002 6.08582L19.4144 12L13.5001 17.9142L12.0859 16.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChevronRightDoubleIcon };

export default ChevronRightDoubleIcon;
