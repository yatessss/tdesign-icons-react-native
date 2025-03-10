import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const InstallMobileIcon = (props) => (
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
      d="M4 1H15V3H6V21H18V11H20V23H4V1ZM20 1V5.65732L21.5304 4.19136L22.9139 5.63564L19 9.38477L15.0861 5.63565L16.4696 4.19136L18 5.65734V1H20ZM11 17H13.0039V19.0039H11V17Z"
      fill="currentColor"
    />
  </Svg>
);
export { InstallMobileIcon };

export default InstallMobileIcon;
