import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const UserError1Icon = (props) => (
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
      d="M8.5 4C6.84315 4 5.5 5.34315 5.5 7C5.5 8.65685 6.84315 10 8.5 10C10.1569 10 11.5 8.65685 11.5 7C11.5 5.34315 10.1569 4 8.5 4ZM3.5 7C3.5 4.23858 5.73858 2 8.5 2C11.2614 2 13.5 4.23858 13.5 7C13.5 9.76142 11.2614 12 8.5 12C5.73858 12 3.5 9.76142 3.5 7ZM17.3787 6.46447L19.5 8.58579L21.6213 6.46447L23.0355 7.87868L20.9142 10L23.0355 12.1213L21.6213 13.5355L19.5 11.4142L17.3787 13.5355L15.9645 12.1213L18.0858 10L15.9645 7.87868L17.3787 6.46447ZM0 19C0 16.2386 2.23858 14 5 14H12C14.7614 14 17 16.2386 17 19V21H15V19C15 17.3431 13.6569 16 12 16H5C3.34315 16 2 17.3431 2 19V21H0V19Z"
      fill="currentColor"
    />
  </Svg>
);
export { UserError1Icon };

export default UserError1Icon;
