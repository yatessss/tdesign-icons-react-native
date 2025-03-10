import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LogoutIcon = (props) => (
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
      d="M21.2072 11.793L15.293 17.7072L13.8788 16.293L17.3788 12.793L7.79297 12.793V10.793L17.3788 10.793L13.8788 7.29297L15.293 5.87876L21.2072 11.793ZM9.79297 4.29297L4.79297 4.29297L4.79297 19.293H9.79297V21.293H2.79297L2.79297 2.29297L9.79297 2.29297V4.29297Z"
      fill="currentColor"
    />
  </Svg>
);
export { LogoutIcon };

export default LogoutIcon;
