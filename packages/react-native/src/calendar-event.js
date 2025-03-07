import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarEventIcon = (props) => (
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
      d="M8 1V4L16 4V1L18 1V4L22 4L22 22L2 22L2 4L6 4L6 1L8 1ZM4 6L4 9L20 9V6L4 6ZM20 11L4 11L4 20L20 20L20 11ZM12.5 12.5H18.5V18.5L12.5 18.5L12.5 12.5ZM14.5 14.5V16.5H16.5V14.5H14.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { CalendarEventIcon };

export default CalendarEventIcon;
