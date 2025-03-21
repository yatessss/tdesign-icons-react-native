import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const GenderMaleIcon = (props) => (
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
      d="M13.5 3H21V10.5H19V6.41421L15.6064 9.80783C16.4816 10.9764 17 12.4277 17 14C17 17.866 13.866 21 10 21C6.13401 21 3 17.866 3 14C3 10.134 6.13401 7 10 7C11.5723 7 13.0236 7.5184 14.1922 8.39362L17.5858 5H13.5V3ZM10 9C7.23858 9 5 11.2386 5 14C5 16.7614 7.23858 19 10 19C12.7614 19 15 16.7614 15 14C15 11.2386 12.7614 9 10 9Z"
      fill="currentColor"
    />
  </Svg>
);
export { GenderMaleIcon };

export default GenderMaleIcon;
