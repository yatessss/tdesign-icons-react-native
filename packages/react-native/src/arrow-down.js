import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowDownIcon = (props) => (
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
      d="M11.0002 4.5L11.0002 16.0858L6.50015 11.5858L5.08594 13L12.0002 19.9142L18.9144 13L17.5001 11.5858L13.0002 16.0858L13.0002 4.5L11.0002 4.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { ArrowDownIcon };

export default ArrowDownIcon;
