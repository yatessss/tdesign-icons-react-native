import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PlayRectangleIcon = (props) => (
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
      d="M1 3H23V21H1V3ZM3 5V19H21V5H3ZM8 6.37083L17.75 12L8 17.6292L8 6.37083ZM10 9.83494V14.1651L13.75 12L10 9.83494Z"
      fill="currentColor"
    />
  </Svg>
);
export { PlayRectangleIcon };

export default PlayRectangleIcon;
