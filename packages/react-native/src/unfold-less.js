import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const UnfoldLessIcon = (props) => (
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
      d="M8.00015 3.58569L12.0002 7.58569L16.0002 3.58569L17.4144 4.99991L12.0002 10.4141L6.58594 4.99991L8.00015 3.58569ZM12.0002 13.5857L17.4144 18.9999L16.0002 20.4141L12.0002 16.4141L8.00015 20.4141L6.58594 18.9999L12.0002 13.5857Z"
      fill="currentColor"
    />
  </Svg>
);
export { UnfoldLessIcon };

export default UnfoldLessIcon;
