import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CodeIcon = (props) => (
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
      d="M0.585938 12L5.53569 7.05028L6.9499 8.46449L3.41436 12L6.9499 15.5356L5.53569 16.9498L0.585938 12ZM8.78747 20.728L13.2725 2.78772L15.2128 3.27279L10.7278 21.2131L8.78747 20.728ZM17.0504 15.5356L20.5859 12L17.0504 8.46449L18.4646 7.05027L23.4144 12L18.4646 16.9498L17.0504 15.5356Z"
      fill="currentColor"
    />
  </Svg>
);
export { CodeIcon };

export default CodeIcon;
