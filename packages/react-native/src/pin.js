import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PinIcon = (props) => (
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
      d="M17.7874 0.693359L23.3095 6.21545L16.9447 13.9886L19.1329 16.1768L13.474 21.8358L8.52427 16.8861L2.16031 23.25L0.746094 21.8358L7.11005 15.4719L2.16024 10.5221L7.8192 4.86311L10.0081 7.05199L17.7874 0.693359ZM13.474 19.0073L16.3045 16.1768L14.2502 14.1225L20.6149 6.34933L17.6524 3.3868L9.87309 9.74543L7.8192 7.69154L4.98867 10.5221L13.474 19.0073Z"
      fill="currentColor"
    />
  </Svg>
);
export { PinIcon };

export default PinIcon;
