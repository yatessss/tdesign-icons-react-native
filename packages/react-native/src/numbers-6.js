import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Numbers6Icon = (props) => (
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
      d="M16.5 4H9C7.89543 4 7 4.89543 7 6V18C7 19.1046 7.89543 20 9 20H15C16.1046 20 17 19.1046 17 18V13C17 11.8954 16.1046 11 15 11H9V6H16.5V4ZM9 13H15V18H9V13Z"
      fill="currentColor"
    />
  </Svg>
);
export { Numbers6Icon };

export default Numbers6Icon;
