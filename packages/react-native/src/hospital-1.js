import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Hospital1Icon = (props) => (
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
      d="M11.9985 1.66064L22.4117 10.9169L21.083 12.4117L19.9999 11.449V21.9999H3.99995V11.4537L2.90588 12.411L1.58887 10.9058L4.33767 8.50064L11.9985 1.66064ZM5.99995 9.69765V19.9999H8.99995V14.9999H14.9999V19.9999H17.9999V9.6712L12.0014 4.33919L5.99995 9.69765ZM12.9999 19.9999V16.9999H10.9999V19.9999H12.9999ZM12.9999 6.99992V8.99992H14.9999V10.9999H12.9999V12.9999H10.9999V10.9999H8.99995V8.99992H10.9999V6.99992H12.9999Z"
      fill="currentColor"
    />
  </Svg>
);
export { Hospital1Icon };

export default Hospital1Icon;
