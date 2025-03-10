import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Certificate1Icon = (props) => (
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
      d="M21 1L21 23L3 23L3 1L21 1ZM13 3L13 9.5L10 7.25L7 9.5L7 3H5L5 21L19 21L19 3L13 3ZM9 3L9 5.5L10 4.75L11 5.5V3L9 3ZM7 12L17 12V14L7 14V12ZM7 16H15L15 18L7 18V16Z"
      fill="currentColor"
    />
  </Svg>
);
export { Certificate1Icon };

export default Certificate1Icon;
