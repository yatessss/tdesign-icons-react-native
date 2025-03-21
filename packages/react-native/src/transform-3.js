import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Transform3Icon = (props) => (
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
      d="M8 2.5L8 6H16.5858L20 2.58579L21.4142 4L18 7.41422V16H21.5V18H18V21.5H16V18L6 18L6 8H2.5V6H6L6 2.5L8 2.5ZM8 8L8 14.5858L14.5858 8H8ZM16 9.41422L9.41421 16L16 16V9.41422Z"
      fill="currentColor"
    />
  </Svg>
);
export { Transform3Icon };

export default Transform3Icon;
