import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AssignmentCodeIcon = (props) => (
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
      d="M2.5 2L9.12759 2C9.75935 1.09427 10.8095 0.5 12 0.5C13.1905 0.5 14.2406 1.09427 14.8724 2L21.5 2V22H2.5L2.5 2ZM4.5 20H19.5V4L13.6376 4L13.3756 3.40037C13.1432 2.86851 12.6135 2.5 12 2.5C11.3865 2.5 10.8568 2.86851 10.6244 3.40037L10.3624 4L4.5 4V20ZM5.58579 12L9.5 8.08579L10.9142 9.5L8.41422 12L10.9142 14.5L9.5 15.9142L5.58579 12ZM14.5 8.08579L18.4142 12L14.5 15.9142L13.0858 14.5L15.5858 12L13.0858 9.5L14.5 8.08579Z"
      fill="currentColor"
    />
  </Svg>
);
export { AssignmentCodeIcon };

export default AssignmentCodeIcon;
