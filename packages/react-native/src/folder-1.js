import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Folder1Icon = (props) => (
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
      d="M1 2.5L9.48063 2.5L11.4806 5L23 5L23 21L1 21L1 2.5ZM3 4.5L3 8.75L21 8.75V7L10.5194 7L8.51937 4.5L3 4.5ZM21 10.75L3 10.75L3 19L21 19L21 10.75Z"
      fill="currentColor"
    />
  </Svg>
);
export { Folder1Icon };

export default Folder1Icon;
