import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RulerIcon = (props) => (
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
      d="M6.71875 2H17.7539L13.6396 20H21.9995V22L1.71875 22L6.71875 2ZM11.588 20L15.2452 4H8.2803L7.6553 6.5H11.8745V8.5H7.1553L6.5303 11H10.7495V13H6.0303L5.4053 15.5H9.62453V17.5H4.9053L4.2803 20H11.588Z"
      fill="currentColor"
    />
  </Svg>
);
export { RulerIcon };

export default RulerIcon;
