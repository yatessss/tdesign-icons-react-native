import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronUpSIcon = (props) => (
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
      d="M11.9996 8.3158L16.9493 13.2655L15.5351 14.6798L11.9996 11.1442L8.46402 14.6798L7.0498 13.2655L11.9996 8.3158Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChevronUpSIcon };

export default ChevronUpSIcon;
