import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const City2Icon = (props) => (
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
      d="M6 0.698242L10 4.03158V10.8649L15 6.69824L22 12.5316V22H2V4.03158L6 0.698242ZM10 20H12V14H18V20H19.9994L20 13.4683L15 9.30166L10 13.4683V20ZM16 20V16H14V20H16ZM8 20V4.96833L6 3.30166L4 4.96833V20H8Z"
      fill="currentColor"
    />
  </Svg>
);
export { City2Icon };

export default City2Icon;
