import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CertificateIcon = (props) => (
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
      d="M1 3L23 3V21H1L1 3ZM3 5L3 19H21V5L19 5L19 11.5L16 9.25L13 11.5L13 5L3 5ZM15 5L15 7.5L16 6.75L17 7.5V5L15 5ZM5 11H11V13H5V11ZM5 15H19V17H5V15Z"
      fill="currentColor"
    />
  </Svg>
);
export { CertificateIcon };

export default CertificateIcon;
