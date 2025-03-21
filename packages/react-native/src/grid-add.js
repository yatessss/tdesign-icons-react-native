import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const GridAddIcon = (props) => (
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
      d="M2 2H11V11H2V2ZM4 4V9H9V4H4ZM13 2H22V11H13V2ZM15 4V9H20V4H15ZM2 13H11V22H2V13ZM4 15V20H9V15H4ZM16.5 13.5H18.5V16.5H21.5V18.5H18.5V21.5H16.5V18.5H13.5V16.5H16.5V13.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { GridAddIcon };

export default GridAddIcon;
