import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarEditIcon = (props) => (
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
      d="M8 1V4H16V1H18V4H22V6.00122L22.0012 6.00122L21.9998 12.0002L19.9998 11.9998L20 11H4V20H12V22H2V4H6V1H8ZM4 9H20V6H4V9ZM19.2866 13.0858L23.4142 17.2134L18.1276 22.5H14.0011L13.9999 18.3725L19.2866 13.0858ZM18.6148 16.586L19.914 17.8852L20.5858 17.2134L19.2866 15.9142L18.6148 16.586ZM18.4998 19.2994L17.2006 18.0002L16.0001 19.2007L16.0005 20.5H17.2992L18.4998 19.2994Z"
      fill="currentColor"
    />
  </Svg>
);
export { CalendarEditIcon };

export default CalendarEditIcon;
