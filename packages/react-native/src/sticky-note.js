import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const StickyNoteIcon = (props) => (
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
      d="M2 2L22 2L22 14.4142L14.4142 22L2 22L2 2ZM4 4L4 20H13L13 13L20 13V4L4 4ZM18.5858 15L15 15L15 18.5858L18.5858 15ZM6 8L18 8V10L6 10V8ZM6 12L11 12V14L6 14V12Z"
      fill="currentColor"
    />
  </Svg>
);
export { StickyNoteIcon };

export default StickyNoteIcon;
