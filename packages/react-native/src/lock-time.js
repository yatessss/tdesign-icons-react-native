import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LockTimeIcon = (props) => (
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
      d="M5.5 7.5C5.5 3.91015 8.41015 1 12 1C15.5899 1 18.5 3.91015 18.5 7.5V9H20.5V11.5H18.5V11H5.5V20H11.5V22H3.5V9H5.5V7.5ZM7.5 9H16.5V7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5V9ZM18.5 15C16.567 15 15 16.567 15 18.5C15 20.433 16.567 22 18.5 22C20.433 22 22 20.433 22 18.5C22 16.567 20.433 15 18.5 15ZM13 18.5C13 15.4624 15.4624 13 18.5 13C21.5376 13 24 15.4624 24 18.5C24 21.5376 21.5376 24 18.5 24C15.4624 24 13 21.5376 13 18.5ZM9 14.5H11.5V16.5H9V14.5ZM19.5 16.252V18.0858L20.9142 19.5001L19.4999 20.9142L17.5 18.9141V16.252H19.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { LockTimeIcon };

export default LockTimeIcon;
