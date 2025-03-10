import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TempleIcon = (props) => (
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
      d="M12 1.58594L19.4142 9.00015H21V11.0002H20V20.0002H22V22.0002H2V20.0002H4V11.0002H3V9.00015H4.58579L12 1.58594ZM6 11.0002V20.0002H11V11.0002H6ZM13 11.0002V20.0002H18V11.0002H13ZM16.5858 9.00015L12 4.41436L7.41421 9.00015H16.5858Z"
      fill="currentColor"
    />
  </Svg>
);
export { TempleIcon };

export default TempleIcon;
