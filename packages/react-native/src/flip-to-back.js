import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FlipToBackIcon = (props) => (
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
      d="M7 3H10.5V5H9V6.5H7V3ZM12.5 3H15.5V5H12.5V3ZM17.5 3H21V6.5H19V5H17.5V3ZM5 7.5V19H16.5V21H3V7.5H5ZM9 8.5V11.5H7V8.5H9ZM21 8.5V11.5H19V8.5H21ZM9 13.5V15H10.5V17H7V13.5H9ZM21 13.5V17H17.5V15H19V13.5H21ZM12.5 15H15.5V17H12.5V15Z"
      fill="currentColor"
    />
  </Svg>
);
export { FlipToBackIcon };

export default FlipToBackIcon;
