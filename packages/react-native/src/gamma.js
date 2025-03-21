import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const GammaIcon = (props) => (
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
      d="M6.26231 1.45703L12.8307 14.2038L18.5015 1.67661L20.3235 2.50139L13.889 16.7158V22H11.889V16.7425L6.18229 5.66799L4.37945 8.86239L2.6377 7.87939L6.26231 1.45703Z"
      fill="currentColor"
    />
  </Svg>
);
export { GammaIcon };

export default GammaIcon;
