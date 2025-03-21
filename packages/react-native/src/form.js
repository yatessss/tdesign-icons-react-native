import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FormIcon = (props) => (
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
      d="M2 2H22V22L2 22V2ZM4 4V7H20V4H4ZM20 9H4V20L20 20V9ZM6 11.5L18 11.5V13.5L6 13.5V11.5ZM6 15.5L14 15.5V17.5L6 17.5L6 15.5Z"
      fill="currentColor"
    />
  </Svg>
);
export { FormIcon };

export default FormIcon;
