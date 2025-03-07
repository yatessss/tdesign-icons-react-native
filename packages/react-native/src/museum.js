import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MuseumIcon = (props) => (
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
      d="M6 2H18V6.32718L22 5.88274V22H2V8.10496L6 7.66051V2ZM8 7.43829L16 6.5494V4H8V7.43829ZM18 20H20V15H18V20ZM20 13V8.11726L4 9.89504V20H16V13H20ZM6 10.998H8.00391V13.002H6V10.998ZM10 10.998H12.0039V13.002H10V10.998Z"
      fill="currentColor"
    />
  </Svg>
);
export { MuseumIcon };

export default MuseumIcon;
