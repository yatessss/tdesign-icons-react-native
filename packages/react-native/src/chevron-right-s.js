import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronRightSIcon = (props) => (
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
      d="M15.6843 12L10.7345 16.9498L9.32031 15.5356L12.8558 12L9.32031 8.46451L10.7345 7.05029L15.6843 12Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChevronRightSIcon };

export default ChevronRightSIcon;
