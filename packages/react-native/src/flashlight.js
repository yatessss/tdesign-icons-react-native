import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FlashlightIcon = (props) => (
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
      d="M4 0H20V7.41421L17 10.4142V24H7V10.4142L4 7.41421V0ZM6 2V3.5H18V2H6ZM18 5.5H6V6.58579L9 9.58579V22H15V9.58579L18 6.58579V5.5ZM11 10H13.0039V12.0039H11V10Z"
      fill="currentColor"
    />
  </Svg>
);
export { FlashlightIcon };

export default FlashlightIcon;
