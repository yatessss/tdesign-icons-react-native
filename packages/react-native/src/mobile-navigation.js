import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MobileNavigationIcon = (props) => (
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
      d="M4 1H20V23H4V1ZM6 3V21H18V3H6ZM12 4.76393L16.9459 14.6558L12 13.1102L7.05407 14.6558L12 4.76393ZM10.9459 11.3442L12 11.0148L13.0541 11.3442L12 9.23607L10.9459 11.3442ZM11 17H13.0039V19.0039H11V17Z"
      fill="currentColor"
    />
  </Svg>
);
export { MobileNavigationIcon };

export default MobileNavigationIcon;
