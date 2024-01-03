import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ThumbUpIcon = (props) => (
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
      d="M10.8786 1.38257L12.1576 1.59573C14.0863 1.91719 15.5 3.58595 15.5 5.54131V7.99992H20.8195C22.0554 7.99992 22.9955 9.10966 22.7923 10.3287L21.1257 20.3287C20.9649 21.2931 20.1306 21.9999 19.1529 21.9999H7V10.8021L10.8786 1.38257ZM12.1131 3.63742L9 11.1977V19.9999L19.1529 19.9999L20.8195 9.99992H13.5V5.54131C13.5 4.66252 12.9289 3.89951 12.1131 3.63742ZM4 9.99992V21.9999H2V9.99992H4Z"
      fill="currentColor"
    />
  </Svg>
);
export { ThumbUpIcon };

export default ThumbUpIcon;
