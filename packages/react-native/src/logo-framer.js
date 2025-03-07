import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LogoFramerIcon = (props) => (
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
      d="M3.08594 1H19.5002V9.5H14.4144L20.9144 16H13.0002V23.9142L4.50015 15.4142V7.5H9.58594L3.08594 1ZM12.4144 7.5H17.5002V3H7.91436L12.4144 7.5ZM11.5859 9.5H6.50015V14.5858L11.0002 19.0858V14H16.0859L11.5859 9.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { LogoFramerIcon };

export default LogoFramerIcon;
