import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SubtitleIcon = (props) => (
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
      d="M1 3L23 3V21H1L1 3ZM3 5L3 19H21V5L3 5ZM5 10C5 8.89543 5.89543 8 7 8H11V10H7V14H11V16H7C5.89543 16 5 15.1046 5 14V10ZM13 10C13 8.89543 13.8954 8 15 8H19V10H15V14H19V16H15C13.8954 16 13 15.1046 13 14V10Z"
      fill="currentColor"
    />
  </Svg>
);
export { SubtitleIcon };

export default SubtitleIcon;
