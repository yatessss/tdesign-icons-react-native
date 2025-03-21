import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Tv2Icon = (props) => (
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
      d="M0 3H24V18H0V3ZM2 5V16H22V5H2ZM4 20H20V22H4V20Z"
      fill="currentColor"
    />
  </Svg>
);
export { Tv2Icon };

export default Tv2Icon;
