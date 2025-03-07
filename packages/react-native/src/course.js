import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CourseIcon = (props) => (
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
      d="M19 3H17L17 9.5L14 7.25L11 9.5V3L5 3L5 21H19V3ZM13 3V5.5L14 4.75L15 5.5V3H13ZM21 23H3L3 1L21 1V23Z"
      fill="currentColor"
    />
  </Svg>
);
export { CourseIcon };

export default CourseIcon;
