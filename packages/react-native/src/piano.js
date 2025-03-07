import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PianoIcon = (props) => (
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
      d="M1 3L23 3V21H1L1 3ZM3 5L3 9H21V5L3 5ZM21 11H19.0005L19 16H17V11H15V16H13V11H11V16H9V11H7V16H5V11H3L3 19H21V11Z"
      fill="currentColor"
    />
  </Svg>
);
export { PianoIcon };

export default PianoIcon;
