import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TaskMarkedIcon = (props) => (
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
      d="M7 1H17V3H21V11H19V5H17V7H7V5H5V21H12.5V23H3V3H7V1ZM9 5H15V3H9V5ZM14.75 12.9961H23.25V23.2906L19.0029 20.6742L14.75 23.2886V12.9961ZM16.75 14.9961V19.7114L19.0041 18.3258L21.25 19.7094V14.9961H16.75Z"
      fill="currentColor"
    />
  </Svg>
);
export { TaskMarkedIcon };

export default TaskMarkedIcon;
