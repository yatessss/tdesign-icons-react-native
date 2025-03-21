import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ComponentDividerHorizontalIcon = (props) => (
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
      d="M13 2L13 22H11L11 2L13 2ZM2 5L9 5L9 19H2L2 5ZM4 7L4 17H7L7 7L4 7ZM15 5L22 5V19H15L15 5ZM17 7L17 17H20V7L17 7Z"
      fill="currentColor"
    />
  </Svg>
);
export { ComponentDividerHorizontalIcon };

export default ComponentDividerHorizontalIcon;
