import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PyramidMayaIcon = (props) => (
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
      d="M6 2H18V4H17V8H19V11H20V14H21V17H22V23H2V17H3V14H4L4 11H5V8H7V4H6V2ZM9 4V8H14.999L15 4H9ZM13 10H11V21H13V10ZM15 21H20V19H19V16H18V13H17V10H15V21ZM9 21V10H7V13H6V16H5L5 19H4V21H9ZM11 4.99805H13.0039V7.00195H11V4.99805Z"
      fill="currentColor"
    />
  </Svg>
);
export { PyramidMayaIcon };

export default PyramidMayaIcon;
