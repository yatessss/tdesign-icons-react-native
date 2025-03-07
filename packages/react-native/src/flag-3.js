import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Flag3Icon = (props) => (
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
      d="M23 10L8 18.6603L8 1.33975L23 10ZM10 4.80385L10 15.1962L19 10L10 4.80385ZM4 1L6 1L6 23H4L4 1Z"
      fill="currentColor"
    />
  </Svg>
);
export { Flag3Icon };

export default Flag3Icon;
