import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TreeSquareDotIcon = (props) => (
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
      d="M8.5 2H15.5V9H13V11.3333H19.5V15H22V22H15V15H17.5V13.3333H6.5V15H9V22H2V15H4.5V11.3333H11V9H8.5V2ZM13.5 7V4H10.5V7H13.5ZM4 17V20H7V17H4ZM17 17V20H20V17H17Z"
      fill="currentColor"
    />
  </Svg>
);
export { TreeSquareDotIcon };

export default TreeSquareDotIcon;
