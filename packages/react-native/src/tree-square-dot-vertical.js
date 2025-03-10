import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TreeSquareDotVerticalIcon = (props) => (
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
      d="M17 4L20 4V7H17V4ZM15 6.5V9H22V2L15 2V4.5H11.3333V11H9V8.5H2L2 15.5H9V13H11.3333L11.3333 19.5H15V22H22V15H15V17.5H13.3333L13.3333 6.5H15ZM17 20V17H20V20H17ZM7 10.5V13.5H4L4 10.5H7Z"
      fill="currentColor"
    />
  </Svg>
);
export { TreeSquareDotVerticalIcon };

export default TreeSquareDotVerticalIcon;
