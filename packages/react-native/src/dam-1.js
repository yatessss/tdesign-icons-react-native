import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Dam1Icon = (props) => (
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
      d="M12 3C15.9051 3 19 6.16249 19 10.1V20H17V10.1C17 7.33858 14.7614 5.1 12 5.1C9.23858 5.1 7 7.33858 7 10.1V20H5V10.1C5 6.16249 8.09493 3 12 3ZM21 20V10.1C21 5.0905 17.0419 1 12 1C6.95806 1 3 5.0905 3 10.1V20H2V22H10V20H9V10.1C9 8.44315 10.3431 7.1 12 7.1C13.6569 7.1 15 8.44315 15 10.1V20H14V22H22V20H21Z"
      fill="currentColor"
    />
  </Svg>
);
export { Dam1Icon };

export default Dam1Icon;
