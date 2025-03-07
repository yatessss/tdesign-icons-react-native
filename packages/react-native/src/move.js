import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MoveIcon = (props) => (
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
      d="M6.75 2.25H9.75V5.25H6.75V2.25ZM14.25 2.25H17.25V5.25H14.25V2.25ZM6.75 7.75H9.75V10.75H6.75V7.75ZM14.25 7.75H17.25V10.75H14.25V7.75ZM6.75 13.25H9.75V16.25H6.75V13.25ZM14.25 13.25H17.25V16.25H14.25V13.25ZM6.75 18.75H9.75V21.75H6.75V18.75ZM14.25 18.75H17.25V21.75H14.25V18.75Z"
      fill="currentColor"
    />
  </Svg>
);
export { MoveIcon };

export default MoveIcon;
