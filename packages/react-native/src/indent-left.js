import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const IndentLeftIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <Path d="M2.00015 4V6H22.0002V4H2.00015Z" fill="currentColor" />
    <Path d="M8.00015 11V13H22.0002V11H8.00015Z" fill="currentColor" />
    <Path d="M2.00015 18H22.0002V20H2.00015V18Z" fill="currentColor" />
    <Path
      d="M1.58594 11.9998L4.76792 15.1818L6.18213 13.7676L4.41436 11.9998L6.18213 10.232L4.76792 8.81783L1.58594 11.9998Z"
      fill="currentColor"
    />
  </Svg>
);
export { IndentLeftIcon };

export default IndentLeftIcon;
