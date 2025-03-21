import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CelsiusIcon = (props) => (
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
      d="M6.5 6C6.22386 6 6 6.22386 6 6.5C6 6.77614 6.22386 7 6.5 7C6.77614 7 7 6.77614 7 6.5C7 6.22386 6.77614 6 6.5 6ZM4 6.5C4 5.11929 5.11929 4 6.5 4C7.88071 4 9 5.11929 9 6.5C9 7.88071 7.88071 9 6.5 9C5.11929 9 4 7.88071 4 6.5ZM11 6C11 4.89543 11.8954 4 13 4H20V6L13 6V18H20V20H13C11.8954 20 11 19.1046 11 18V6Z"
      fill="currentColor"
    />
  </Svg>
);
export { CelsiusIcon };

export default CelsiusIcon;
