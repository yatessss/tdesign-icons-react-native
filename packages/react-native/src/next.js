import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const NextIcon = (props) => (
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
      d="M6.75 4.33594L14.4142 12.0002L6.75 19.6644V4.33594ZM17.5 5.00015V19.0002H15.5V5.00015H17.5ZM8.75 9.16436V14.8359L11.5858 12.0002L8.75 9.16436Z"
      fill="currentColor"
    />
  </Svg>
);
export { NextIcon };

export default NextIcon;
