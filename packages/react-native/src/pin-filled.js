import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PinFilledIcon = (props) => (
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
      d="M18.0755 0.980957L23.0249 5.93038L16.6602 13.7035L18.7814 15.8248L13.476 21.1302L8.87986 16.534L2.16226 23.2516L0.748047 21.8374L7.46565 15.1198L2.86942 10.5236L8.17482 5.2182L10.2962 7.33958L18.0755 0.980957Z"
      fill="currentColor"
    />
  </Svg>
);
export { PinFilledIcon };

export default PinFilledIcon;
