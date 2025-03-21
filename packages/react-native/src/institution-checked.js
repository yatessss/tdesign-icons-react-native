import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const InstitutionCheckedIcon = (props) => (
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
      d="M11 0.856079L21 6.41163V9.00004H1V6.41163L11 0.856079ZM4.05913 7.00004H17.9409L11 3.144L4.05913 7.00004ZM6 11V19H4V11H6ZM12 11V19H10V11H12ZM18 11V17H16V11H18ZM22.5961 17.9395L16.9392 23.5963L13.4037 20.0608L14.8179 18.6466L16.9392 20.7679L21.1819 16.5253L22.5961 17.9395ZM1 21H12V23H1V21Z"
      fill="currentColor"
    />
  </Svg>
);
export { InstitutionCheckedIcon };

export default InstitutionCheckedIcon;
