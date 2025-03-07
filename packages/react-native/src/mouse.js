import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MouseIcon = (props) => (
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
      d="M4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9V15C20 19.4183 16.4183 23 12 23C7.58172 23 4 19.4183 4 15V9ZM11 3.08296C8.16229 3.55904 6 6.027 6 9H11V3.08296ZM13 3.08296V9H18C18 6.027 15.8377 3.55904 13 3.08296ZM18 11H6V15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15V11Z"
      fill="currentColor"
    />
  </Svg>
);
export { MouseIcon };

export default MouseIcon;
