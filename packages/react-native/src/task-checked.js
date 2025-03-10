import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TaskCheckedIcon = (props) => (
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
      d="M7 1H17V3H21V14H19V5H17V7H7V5H5V21H11V23H3V3H7V1ZM9 5H15V3H9V5ZM23.6573 16.5858L16.5862 23.6569L12.3436 19.4142L13.7578 18L16.5862 20.8285L22.2431 15.1716L23.6573 16.5858Z"
      fill="currentColor"
    />
  </Svg>
);
export { TaskCheckedIcon };

export default TaskCheckedIcon;
