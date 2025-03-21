import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const InstitutionIcon = (props) => (
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
      d="M12 0.856079L22 6.41163V9.00004H2V6.41163L12 0.856079ZM5.05913 7.00004H18.9409L12 3.144L5.05913 7.00004ZM7 11V19H5V11H7ZM13 11V19H11V11H13ZM19 11V19H17V11H19ZM2 21H22V23H2V21Z"
      fill="currentColor"
    />
  </Svg>
);
export { InstitutionIcon };

export default InstitutionIcon;
