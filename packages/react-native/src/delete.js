import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DeleteIcon = (props) => (
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
      d="M7.5 1H16.5V4H22V6H19.971L19.471 23H4.52898L4.02898 6H2V4H7.5V1ZM9.5 4H14.5V3H9.5V4ZM6.02984 6L6.47102 21H17.529L17.9702 6H6.02984ZM13 8V19H11V8H13Z"
      fill="currentColor"
    />
  </Svg>
);
export { DeleteIcon };

export default DeleteIcon;
