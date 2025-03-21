import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const EnterIcon = (props) => (
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
      d="M20.0002 4L20.0002 13C20.0002 15.2091 18.2093 17 16.0001 17L6.91437 17L9.41437 19.5L8.00015 20.9142L3.08594 16L8.00015 11.0858L9.41436 12.5L6.91436 15L16.0001 15C17.1047 15 18.0002 14.1046 18.0002 13L18.0002 4L20.0002 4Z"
      fill="currentColor"
    />
  </Svg>
);
export { EnterIcon };

export default EnterIcon;
