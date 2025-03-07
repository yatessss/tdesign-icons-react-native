import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CatalogIcon = (props) => (
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
      d="M3 1H21V23H3V1ZM5 3V21H19V3H5ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"
      fill="currentColor"
    />
  </Svg>
);
export { CatalogIcon };

export default CatalogIcon;
