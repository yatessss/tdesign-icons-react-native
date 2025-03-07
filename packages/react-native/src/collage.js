import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CollageIcon = (props) => (
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
      d="M2 2L22 2L22 22L2 22L2 2ZM4 4L4 20H8.19783L11.7534 4L4 4ZM13.8022 4L12.1606 11.3872L20 14.523L20 4L13.8022 4ZM20 16.677L11.721 13.3654L10.2466 20L20 20V16.677Z"
      fill="currentColor"
    />
  </Svg>
);
export { CollageIcon };

export default CollageIcon;
