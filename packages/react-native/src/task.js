import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TaskIcon = (props) => (
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
      d="M7 1H17V3H21V23H3V3H7V1ZM7 5H5V21H19V5H17V7H7V5ZM15 3H9V5H15V3ZM9 11H15V13H9V11ZM9 15H15V17H9V15Z"
      fill="currentColor"
    />
  </Svg>
);
export { TaskIcon };

export default TaskIcon;
