import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TimeIcon = (props) => (
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
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 0.999999 18.0751 1 12C1 5.92487 5.92487 0.999999 12 1C18.0751 1 23 5.92487 23 12ZM15 16.4142L11 12.4142L11 5.5H13L13 11.5858L16.4142 15L15 16.4142Z"
      fill="currentColor"
    />
  </Svg>
);
export { TimeIcon };

export default TimeIcon;
