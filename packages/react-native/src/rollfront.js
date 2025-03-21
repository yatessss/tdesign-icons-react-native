import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RollfrontIcon = (props) => (
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
      d="M3.07089 13.9999C3.55612 17.3922 6.47353 19.9999 10 19.9999H18.5V17.9999H10C7.23858 17.9999 5 15.7613 5 12.9999C5 10.2385 7.23858 7.99991 10 7.99991L17.0858 7.99991L14.5858 10.4999L16 11.9141L20.9142 6.99991L16 2.08569L14.5858 3.49991L17.0858 5.99991L10 5.99991C6.13401 5.99991 3 9.13392 3 12.9999L3 13.9999H3.07089Z"
      fill="currentColor"
    />
  </Svg>
);
export { RollfrontIcon };

export default RollfrontIcon;
