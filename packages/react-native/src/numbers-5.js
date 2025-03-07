import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Numbers5Icon = (props) => (
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
      d="M17 4H7V11C7 12.1046 7.89543 13 9 13H15V18H7V20H15C16.1046 20 17 19.1046 17 18V13C17 11.8954 16.1046 11 15 11H9V6H17V4Z"
      fill="currentColor"
    />
  </Svg>
);
export { Numbers5Icon };

export default Numbers5Icon;
