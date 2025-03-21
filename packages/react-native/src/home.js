import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = (props) => (
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
      d="M12 1.19824L22 9.53158V22H2V9.53158L12 1.19824ZM10 20H14V15H10V20ZM16 20H20V10.4683L12 3.80166L4 10.4683V20H8V13H16V20Z"
      fill="currentColor"
    />
  </Svg>
);
export { HomeIcon };

export default HomeIcon;
