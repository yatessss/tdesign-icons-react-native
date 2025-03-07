import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TornadoIcon = (props) => (
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
      d="M5.52778 4C5.21892 4 5 4.24108 5 4.5C5 4.75892 5.21892 5 5.52778 5L19 5L19 7L5.52778 7C4.1491 7 3 5.89793 3 4.5C3 3.10207 4.1491 2 5.52778 2L8 2L8 4L5.52778 4ZM21 8L21 10L6 10L6 8L21 8ZM8 11L19 11L19 13L8 13L8 11ZM6 14L15 14L15 16L6 16L6 14ZM5 17L13 17L13 19L5 19L5 17ZM8 20L15 20L15 22L8 22L8 20Z"
      fill="currentColor"
    />
  </Svg>
);
export { TornadoIcon };

export default TornadoIcon;
