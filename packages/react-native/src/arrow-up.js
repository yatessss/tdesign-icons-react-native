import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUpIcon = (props) => (
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
      d="M11.0002 19.5L11.0002 7.91424L6.50015 12.4142L5.08594 11L12.0002 4.08582L18.9144 11L17.5001 12.4142L13.0002 7.91424L13.0002 19.5H11.0002Z"
      fill="currentColor"
    />
  </Svg>
);
export { ArrowUpIcon };

export default ArrowUpIcon;
