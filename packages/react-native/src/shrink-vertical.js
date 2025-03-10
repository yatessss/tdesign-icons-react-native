import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ShrinkVerticalIcon = (props) => (
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
      d="M13 1.5V6.58579L15.5 4.08579L16.9142 5.5L12 10.4142L7.08579 5.5L8.5 4.08579L11 6.58579L11 1.5L13 1.5ZM21 13L3 13L3 11L21 11L21 13ZM12 13.5858L16.9142 18.5L15.5 19.9142L13 17.4142L13 22.5H11L11 17.4142L8.5 19.9142L7.08579 18.5L12 13.5858Z"
      fill="currentColor"
    />
  </Svg>
);
export { ShrinkVerticalIcon };

export default ShrinkVerticalIcon;
