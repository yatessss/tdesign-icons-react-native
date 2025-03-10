import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SystemDeviceIcon = (props) => (
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
      d="M6.53333 1H21V22H2V6.58824H6.53333V1ZM8.53333 6.58824H13.0667V20H19V3H8.53333V6.58824ZM11.0667 20V8.58824H4V20H11.0667ZM6 16H9V18H6V16Z"
      fill="currentColor"
    />
  </Svg>
);
export { SystemDeviceIcon };

export default SystemDeviceIcon;
