import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DownscaleIcon = (props) => (
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
      d="M2 2H11V4H4V10H2V2ZM21.4142 3.99961L16.3872 9.02659L19.914 9.04675L19.9026 11.0467L12.9924 11.0072L12.9529 4.097L14.9529 4.08557L14.973 7.61238L20 2.58539L21.4142 3.99961ZM2 12H6V14H4V16H2V12ZM8 12H12V16H10V14H8V12ZM22 13V22H14V20H20V13H22ZM4 18V20H6V22H2V18H4ZM12 18V22H8V20H10V18H12Z"
      fill="currentColor"
    />
  </Svg>
);
export { DownscaleIcon };

export default DownscaleIcon;
