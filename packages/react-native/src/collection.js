import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CollectionIcon = (props) => (
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
      d="M18 4H19V2H18H6H5V4H6L18 4ZM21 7.5H20L4 7.5H3V5.5L4 5.5L20 5.5H21V7.5ZM23 9V10V21V22H22H2H1V21V10V9H2L22 9H23ZM21 11L3 11L3 20H21V11Z"
      fill="currentColor"
    />
  </Svg>
);
export { CollectionIcon };

export default CollectionIcon;
