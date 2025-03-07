import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Measurement1Icon = (props) => (
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
      d="M2 2L12 2L12 12L22 12L22 22L2 22L2 2ZM4 4L4 6.5L6.00368 6.5V8.5H4L4 11H6.00368V13H4V15.5H6.00368L6.00368 17.5H4L4 20H6.5V18.0326H8.5V20H11L11 18.0326H13L13 20L15.5 20L15.5 18.0326H17.5L17.5 20H20V14L10 14L10 4L4 4Z"
      fill="currentColor"
    />
  </Svg>
);
export { Measurement1Icon };

export default Measurement1Icon;
