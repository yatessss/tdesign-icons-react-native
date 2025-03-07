import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const GitRepositoryCommitsIcon = (props) => (
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
      d="M3 5.5C3 3.01472 5.01472 1 7.5 1H21V23H16V21H19V16H16.5V14H19V3H7.5C6.11929 3 5 4.11929 5 5.5V14.7578C5.71505 14.2791 6.57493 14 7.5 14H9.5V16H7.5C6.11929 16 5 17.1193 5 18.5C5 19.8807 6.11929 21 7.5 21H10V23H7.5C5.01472 23 3 20.9853 3 18.5V5.5ZM8 5H10.0039V7.00391H8V5ZM8 8H10.0039V10.0039H8V8ZM13 14.6152L16.9139 18.3644L15.5304 19.8086L14 18.3427V23H12V18.3427L10.4696 19.8086L9.08611 18.3644L13 14.6152Z"
      fill="currentColor"
    />
  </Svg>
);
export { GitRepositoryCommitsIcon };

export default GitRepositoryCommitsIcon;
