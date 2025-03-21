import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MeasurementIcon = (props) => (
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
      d="M6 1L18 1V23H6L6 1ZM8 3V6H10.5V8H8L8 11H12V13H8L8 16H10.5V18H8V21H16L16 3L8 3Z"
      fill="currentColor"
    />
  </Svg>
);
export { MeasurementIcon };

export default MeasurementIcon;
