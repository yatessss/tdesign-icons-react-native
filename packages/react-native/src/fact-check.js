import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FactCheckIcon = (props) => (
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
      d="M23 3V21L1 21L1 3L23 3ZM21 5L3 5L3 19H21V5ZM19.9142 10.5L15 15.4142L12.0858 12.5L13.5 11.0858L15 12.5858L18.5 9.08579L19.9142 10.5ZM11 17H5L5 15H11V17ZM11 9L5 9V7L11 7V9ZM11 13H5V11H11V13Z"
      fill="currentColor"
    />
  </Svg>
);
export { FactCheckIcon };

export default FactCheckIcon;
