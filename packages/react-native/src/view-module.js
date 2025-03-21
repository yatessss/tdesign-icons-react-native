import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ViewModuleIcon = (props) => (
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
      d="M1 3H23V21H1V3ZM3 5V11H7.66667V5H3ZM9.66667 5V11H14.3333V5H9.66667ZM16.3333 5V11H21V5H16.3333ZM21 13H16.3333V19H21V13ZM14.3333 19V13H9.66667V19H14.3333ZM7.66667 19V13H3V19H7.66667Z"
      fill="currentColor"
    />
  </Svg>
);
export { ViewModuleIcon };

export default ViewModuleIcon;
