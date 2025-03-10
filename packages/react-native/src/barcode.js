import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BarcodeIcon = (props) => (
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
      d="M2 2H5V21H2V2ZM8.75 2L8.75 21H6.75L6.75 2L8.75 2ZM10.5 2H13.5V21H10.5V2ZM17.25 2L17.25 21H15.25L15.25 2L17.25 2ZM19 2H22V21H19V2Z"
      fill="currentColor"
    />
  </Svg>
);
export { BarcodeIcon };

export default BarcodeIcon;
