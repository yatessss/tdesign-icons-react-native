import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AssignmentUserIcon = (props) => (
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
      d="M12 2.5C11.3865 2.5 10.8568 2.86851 10.6244 3.40037L10.3624 4H4.5V20H19.5V4H13.6376L13.3756 3.40037C13.1432 2.86851 12.6135 2.5 12 2.5ZM9.12759 2C9.75936 1.09427 10.8095 0.5 12 0.5C13.1905 0.5 14.2406 1.09427 14.8724 2H21.5V22H2.5V2H9.12759ZM12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8ZM8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13C10.067 13 8.5 11.433 8.5 9.5ZM6 18C6 15.7909 7.79086 14 10 14H14C16.2091 14 18 15.7909 18 18V19H16V18C16 16.8954 15.1046 16 14 16H10C8.89543 16 8 16.8954 8 18V19H6V18Z"
      fill="currentColor"
    />
  </Svg>
);
export { AssignmentUserIcon };

export default AssignmentUserIcon;
