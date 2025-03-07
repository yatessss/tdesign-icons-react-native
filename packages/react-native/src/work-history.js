import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const WorkHistoryIcon = (props) => (
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
      d="M7.5 2.5H16.5V6.5H22V11H20V8.5H4V19.5H11V21.5H2V6.5H7.5V2.5ZM9.5 6.5H14.5V4.5H9.5V6.5ZM18 14.5C16.067 14.5 14.5 16.067 14.5 18C14.5 19.933 16.067 21.5 18 21.5C19.933 21.5 21.5 19.933 21.5 18C21.5 16.067 19.933 14.5 18 14.5ZM12.5 18C12.5 14.9624 14.9624 12.5 18 12.5C21.0376 12.5 23.5 14.9624 23.5 18C23.5 21.0376 21.0376 23.5 18 23.5C14.9624 23.5 12.5 21.0376 12.5 18ZM19 15.752V17.5858L20.4142 19.0001L18.9999 20.4142L17 18.4141V15.752H19Z"
      fill="currentColor"
    />
  </Svg>
);
export { WorkHistoryIcon };

export default WorkHistoryIcon;
