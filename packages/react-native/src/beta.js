import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BetaIcon = (props) => (
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
      d="M20.0002 2.49121V21.0001H4.00025V19.0001H18.0002V15.9433L3.49023 9.47622L20.0002 2.49121ZM18.0002 13.7537V5.50899L8.51026 9.52399L18.0002 13.7537Z"
      fill="currentColor"
    />
  </Svg>
);
export { BetaIcon };

export default BetaIcon;
