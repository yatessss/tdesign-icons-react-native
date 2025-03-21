import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Numbers3Icon = (props) => (
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
      d="M7 4H15C16.1046 4 17 4.89543 17 6V18C17 19.1046 16.1046 20 15 20H7V18H15V13H8V11H15V6H7V4Z"
      fill="currentColor"
    />
  </Svg>
);
export { Numbers3Icon };

export default Numbers3Icon;
