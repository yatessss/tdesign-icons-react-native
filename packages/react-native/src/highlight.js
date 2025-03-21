import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HighlightIcon = (props) => (
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
      d="M2 2H5.5V4H4V5.5H2V2ZM7.5 2H10.5V4H7.5V2ZM12.5 2H15.5V4H12.5V2ZM17.5 2H21V5.5H19V4H17.5V2ZM4 7.5V10.5H2L2 7.5H4ZM21 7.5V10.5H19V7.5H21ZM4 12.5V15.5H2L2 12.5H4ZM20 14V16H17.4142L21.4142 20L20 21.4142L16 17.4142V20H14V14H20ZM4 17.5V19H5.5V21H2V17.5H4ZM7.5 19H10.5V21H7.5V19Z"
      fill="currentColor"
    />
  </Svg>
);
export { HighlightIcon };

export default HighlightIcon;
