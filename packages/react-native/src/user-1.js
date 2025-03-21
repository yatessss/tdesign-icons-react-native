import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const User1Icon = (props) => (
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
      d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7ZM3.5 19C3.5 16.2386 5.73858 14 8.5 14H15.5C18.2614 14 20.5 16.2386 20.5 19V21H18.5V19C18.5 17.3431 17.1569 16 15.5 16H8.5C6.84315 16 5.5 17.3431 5.5 19V21H3.5V19Z"
      fill="currentColor"
    />
  </Svg>
);
export { User1Icon };

export default User1Icon;
