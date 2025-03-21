import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SimCardIcon = (props) => (
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
      d="M7.58579 1H21V23H3V5.58579L7.58579 1ZM8.41421 3L5 6.41421V21H19V3H8.41421ZM8 8.99805H10.0039V11.002H8V8.99805ZM14 8.99805H16.0039V11.002H14V8.99805ZM13 9V14H11V9H13ZM10 12V17H8V12H10ZM16 12V17H14V12H16ZM10.998 14.998H13.002V17.002H10.998V14.998Z"
      fill="currentColor"
    />
  </Svg>
);
export { SimCardIcon };

export default SimCardIcon;
