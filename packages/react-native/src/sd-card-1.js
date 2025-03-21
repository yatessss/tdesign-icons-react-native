import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SdCard1Icon = (props) => (
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
      d="M3 2H15.5146L21 9.67953V22H3V2ZM12 4H11V7.5H9V4H8V7.5H6V4H5V20H19V10.3205L14.4854 4H14V7.5H12V4Z"
      fill="currentColor"
    />
  </Svg>
);
export { SdCard1Icon };

export default SdCard1Icon;
