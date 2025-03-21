import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SonicIcon = (props) => (
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
      d="M13 2L13 22H11L11 2L13 2ZM9 6L9 18H7L7 6H9ZM17 6L17 18H15L15 6H17ZM5 9V15H3V9H5ZM21 9V15H19V9H21Z"
      fill="currentColor"
    />
  </Svg>
);
export { SonicIcon };

export default SonicIcon;
