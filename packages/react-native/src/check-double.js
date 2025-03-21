import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CheckDoubleIcon = (props) => (
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
      d="M17.6571 7.17142L12.3538 12.4747L10.9396 11.0605L16.2429 5.7572L17.6571 7.17142ZM23.3143 7.17142L12.7077 17.778L6.34375 11.4141L7.75796 9.99984L12.7077 14.9496L21.9001 5.7572L23.3143 7.17142ZM2.10074 9.99984L7.05048 14.9496L7.40404 14.596L8.81825 16.0103L7.05048 17.778L0.686523 11.4141L2.10074 9.99984Z"
      fill="currentColor"
    />
  </Svg>
);
export { CheckDoubleIcon };

export default CheckDoubleIcon;
