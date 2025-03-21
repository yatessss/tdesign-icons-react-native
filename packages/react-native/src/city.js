import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CityIcon = (props) => (
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
      d="M2 1.5L10 4.83333V10H22V22H2V1.5ZM10 12V20H12V15H18V20H20V12H10ZM16 20V17H14V20H16ZM8 20V6.16667L4 4.5V20H8Z"
      fill="currentColor"
    />
  </Svg>
);
export { CityIcon };

export default CityIcon;
