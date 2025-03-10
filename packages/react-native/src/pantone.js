import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PantoneIcon = (props) => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="rgba(0, 0, 0, 0.9)"
    {...props}
  >
    <Path
      d="M14.3472 0.991211L17.525 5.44644L19.6238 4.73108L21.5385 10.3333H23V22H1L1 10.3333H2.00984L2.65212 10.3333L14.3472 0.991211ZM3.35284 12.3333L3.3496 12.3359H3L3 20H21V12.3333L3.35284 12.3333ZM19.425 10.3333L18.3878 7.29868L16.7836 7.81212L9.38658 10.3333H19.425ZM15.5488 6.12L13.9454 3.87198L7.84328 8.74633L15.5488 6.12ZM5.28516 15.164H7.28906V17.1679H5.28516V15.164Z"
      fill="currentColor"
    />
  </Svg>
);
export { PantoneIcon };

export default PantoneIcon;
