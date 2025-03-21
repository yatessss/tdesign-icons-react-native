import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Numbers7Icon = (props) => (
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
      d="M7 4H17.5V7.11339C17.5 7.61093 17.3146 8.0906 16.9799 8.45874L12.5 13.3866V20H10.5V13.3866C10.5 12.8891 10.6854 12.4094 11.0201 12.0413L15.5 7.11339V6H7V4Z"
      fill="currentColor"
    />
  </Svg>
);
export { Numbers7Icon };

export default Numbers7Icon;
