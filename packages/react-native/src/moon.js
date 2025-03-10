import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MoonIcon = (props) => (
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
      d="M10.412 4.15761C6.75443 4.8942 4 8.12543 4 12C4 16.4183 7.58172 20 12 20C14.9602 20 17.5466 18.3918 18.9302 15.9997C13.9918 15.9622 10 11.9473 10 7C10 6.02085 10.1313 5.06315 10.412 4.15761ZM2 12C2 6.47715 6.47715 2 12 2H13.7337L12.8656 3.50069C12.2871 4.50091 12 5.68848 12 7C12 10.866 15.134 14 19 14C19.4618 14 19.9122 13.9554 20.3475 13.8706L22.0301 13.5428L21.4872 15.1689C20.1623 19.1373 16.4167 22 12 22C6.47715 22 2 17.5228 2 12Z"
      fill="currentColor"
    />
  </Svg>
);
export { MoonIcon };

export default MoonIcon;
