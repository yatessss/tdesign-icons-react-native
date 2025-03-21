import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CodeOffIcon = (props) => (
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
      d="M23.4142 11.9995L18.4646 7.04991L17.0504 8.46412L20.5861 11.9998L18.0862 14.501L19.5007 15.9149L23.4142 11.9995ZM21.4144 20.0006L4.00015 2.58643L2.58594 4.00064L5.58575 7.00045L0.585938 12.0003L5.53568 16.95L6.9499 15.5358L3.41436 12.0003L6.99996 8.41466L20.0002 21.4149L21.4144 20.0006Z"
      fill="currentColor"
    />
  </Svg>
);
export { CodeOffIcon };

export default CodeOffIcon;
