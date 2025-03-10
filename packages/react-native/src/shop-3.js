import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Shop3Icon = (props) => (
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
      d="M2 2H22V6C22 5.99995 22 6.00005 22 6V22H2V2ZM4 9.46487V20H8V13H16V20H20V9.46487C19.4117 9.80521 18.7286 10 18 10C16.8053 10 15.7329 9.47624 15 8.64582C14.2671 9.47624 13.1947 10 12 10C10.8053 10 9.73295 9.47624 9 8.64582C8.26706 9.47624 7.19469 10 6 10C5.27143 10 4.58835 9.80521 4 9.46487ZM8 6H10C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6H16C16 7.10457 16.8954 8 18 8C19.1046 8 20 7.10457 20 6V4H4V6C4 7.10457 4.89543 8 6 8C7.10457 8 8 7.10457 8 6ZM14 20V15H10V20H14Z"
      fill="currentColor"
    />
  </Svg>
);
export { Shop3Icon };

export default Shop3Icon;
