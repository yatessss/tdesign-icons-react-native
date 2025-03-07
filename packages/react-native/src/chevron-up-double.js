import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronUpDoubleIcon = (props) => (
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
      d="M16.5002 18.4142L12.0002 13.9142L7.50015 18.4142L6.08594 17L12.0002 11.0858L17.9144 17L16.5002 18.4142ZM16.5002 11.9142L12.0002 7.41424L7.50015 11.9142L6.08594 10.5L12.0002 4.58582L17.9144 10.5L16.5002 11.9142Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChevronUpDoubleIcon };

export default ChevronUpDoubleIcon;
