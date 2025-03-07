import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BlockchainIcon = (props) => (
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
      d="M2 2H9V4.5H15V2H22V9H19.5V15H22V22H15V19.5H9V22H2V15H4.5V9H2V2ZM7 7V4H4V7H7ZM6.5 9V15H9V17.5H15V15H17.5V9H15V6.5H9V9H6.5ZM17 17V20H20V17H17ZM7 17H4V20H7V17ZM17 4V7H20V4H17Z"
      fill="currentColor"
    />
  </Svg>
);
export { BlockchainIcon };

export default BlockchainIcon;
