import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Tv1Icon = (props) => (
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
      d="M0 3H24V18H19.9539L22.6518 20.0631L21.4369 21.6518L16.6615 18H7.3347L2.56374 21.6519L1.34811 20.0637L4.04425 18H0V3ZM2 5V16H22V5H2Z"
      fill="currentColor"
    />
  </Svg>
);
export { Tv1Icon };

export default Tv1Icon;
