import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ChevronDownDoubleIcon = (props) => (
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
      d="M16.5002 5.58582L12.0002 10.0858L7.50015 5.58582L6.08594 7.00003L12.0002 12.9142L17.9144 7.00003L16.5002 5.58582ZM16.5002 12.0858L12.0002 16.5858L7.50015 12.0858L6.08594 13.5L12.0002 19.4142L17.9144 13.5L16.5002 12.0858Z"
      fill="currentColor"
    />
  </Svg>
);
export { ChevronDownDoubleIcon };

export default ChevronDownDoubleIcon;
