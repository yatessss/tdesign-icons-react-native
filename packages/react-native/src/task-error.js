import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TaskErrorIcon = (props) => (
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
      d="M7 1H17V3H21V12H19V5H17V7H7V5H5V21H12V23H3V3H7V1ZM9 5H15V3H9V5ZM16.1716 14.7574L19 17.5858L21.8284 14.7574L23.2426 16.1716L20.4142 19L23.2426 21.8284L21.8284 23.2426L19 20.4142L16.1716 23.2426L14.7574 21.8284L17.5858 19L14.7574 16.1716L16.1716 14.7574Z"
      fill="currentColor"
    />
  </Svg>
);
export { TaskErrorIcon };

export default TaskErrorIcon;
