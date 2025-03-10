import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BacktopIcon = (props) => (
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
      d="M4 4H20V6H4V4ZM12 7.58579L18.9142 14.5L17.5 15.9142L13 11.4142V21H11V11.4142L6.5 15.9142L5.08579 14.5L12 7.58579Z"
      fill="currentColor"
    />
  </Svg>
);
export { BacktopIcon };

export default BacktopIcon;
