import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MoreIcon = (props) => (
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
      d="M10.5 3H13.5V6H10.5V3ZM10.5 10.5H13.5V13.5H10.5V10.5ZM10.5 18H13.5V21H10.5V18Z"
      fill="currentColor"
    />
  </Svg>
);
export { MoreIcon };

export default MoreIcon;
