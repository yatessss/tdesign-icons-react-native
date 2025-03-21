import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TheatersIcon = (props) => (
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
      d="M22 22H2L2 2L22 2V22ZM20 4L17.5 4V6.5H20V4ZM20 8.5H17.5V11H20V8.5ZM20 13H17.5V15.5H20V13ZM17.5 17.5V20H20V17.5H17.5ZM15.5 15.5V13H15L15 11H15.5V8.5H15V6.5H15.5V4H8.5L8.5 6.5H9V8.5H8.5V11H9V13H8.5V15.5H9L9 17.5H8.5V20H15.5V17.5H15V15.5H15.5ZM6.5 4H4V6.5H6.5L6.5 4ZM6.5 8.5H4V11L6.5 11V8.5ZM6.5 13L4 13L4 15.5L6.5 15.5V13ZM6.5 17.5L4 17.5L4 20H6.5V17.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { TheatersIcon };

export default TheatersIcon;
