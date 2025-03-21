import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LoginIcon = (props) => (
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
      d="M3 11L12.5858 11L9.08579 7.5L10.5 6.08579L16.4142 12L10.5 17.9142L9.08579 16.5L12.5858 13L3 13L3 11ZM14 19.5L19 19.5L19 4.5L14 4.5V2.5L21 2.5L21 21.5L14 21.5V19.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { LoginIcon };

export default LoginIcon;
