import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Fingerprint1Icon = (props) => (
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
      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V21H20V12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12V21H2V12ZM6.5 12C6.5 8.96243 8.96243 6.5 12 6.5C15.0376 6.5 17.5 8.96243 17.5 12V21H15.5V12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12V21H6.5V12ZM13 11V21H11V11H13Z"
      fill="currentColor"
    />
  </Svg>
);
export { Fingerprint1Icon };

export default Fingerprint1Icon;
