import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const QueueIcon = (props) => (
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
      d="M22 2.00098L22.0034 20.4186L20 18.4153V4.00113L7.00104 4.0021L7.00089 2.0021L22 2.00098ZM2 6.00008H18V22.0001H2V6.00008ZM4 8.00008V20.0001H16V8.00008H4ZM11 9.50007V13.0001H14.5V15.0001H11V18.5001H9V15.0001H5.5V13.0001H9V9.50007H11Z"
      fill="currentColor"
    />
  </Svg>
);
export { QueueIcon };

export default QueueIcon;
