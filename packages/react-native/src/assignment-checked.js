import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const AssignmentCheckedIcon = (props) => (
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
      d="M12 2.5C11.3865 2.5 10.8568 2.86851 10.6244 3.40037L10.3624 4H4.5V20H19.5V4H13.6376L13.3756 3.40037C13.1432 2.86851 12.6135 2.5 12 2.5ZM9.12759 2C9.75936 1.09427 10.8095 0.5 12 0.5C13.1905 0.5 14.2406 1.09427 14.8724 2H21.5V22H2.5V2H9.12759ZM17.6573 9.58582L10.5862 16.6569L6.3436 12.4142L7.75781 11L10.5862 13.8285L16.2431 8.1716L17.6573 9.58582Z"
      fill="currentColor"
    />
  </Svg>
);
export { AssignmentCheckedIcon };

export default AssignmentCheckedIcon;
