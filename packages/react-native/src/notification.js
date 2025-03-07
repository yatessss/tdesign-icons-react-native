import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const NotificationIcon = (props) => (
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
      d="M4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8V12.6972L22 15.6972V20H16.3885C15.9338 22.004 14.1416 23.5 12 23.5C9.85841 23.5 8.06624 22.004 7.61151 20H2V15.6972L4 12.6972V8ZM9.70802 20C10.0938 20.883 10.9748 21.5 12 21.5C13.0252 21.5 13.9062 20.883 14.292 20H9.70802ZM12 2C8.68629 2 6 4.68629 6 8V13.3028L4 16.3028V18H20V16.3028L18 13.3028V8C18 4.68629 15.3137 2 12 2Z"
      fill="currentColor"
    />
  </Svg>
);
export { NotificationIcon };

export default NotificationIcon;
