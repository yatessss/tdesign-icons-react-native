import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TipsDoubleIcon = (props) => (
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
      d="M21 7L6 7L6 18H10.9142L13.5 20.5858L16.0858 18H21V7ZM23 20H16.9142L13.5 23.4142L10.0858 20H4L4 5L23 5V20ZM19 3.5H2.5L2.5 15.5H0.5L0.500001 1.5L19 1.5V3.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { TipsDoubleIcon };

export default TipsDoubleIcon;
