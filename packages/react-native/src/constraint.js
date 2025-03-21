import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ConstraintIcon = (props) => (
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
      d="M10.0001 8L6.20065 8.00036C3.8305 8.02562 2 9.85117 2 12.0001C2 14.149 3.83048 15.9745 6.20061 15.9998H10V17.9998H6.18584C2.80939 17.9671 -1.19209e-07 15.338 0 12.0001C5.96047e-08 8.66217 2.80939 6.03309 6.18584 6.0004L6.19543 6.00031L9.99991 6L10.0001 8ZM14 6.00008L17.75 6.00009C21.1552 6.00009 24 8.64097 24 12.0001C24 15.3592 21.1552 18.0001 17.75 18.0001L14 18.0001L14 16.0001L17.75 16.0001C20.1437 16.0001 22 14.1638 22 12.0001C22 9.83637 20.1437 8.00009 17.75 8.00009L14 8.00008L14 6.00008ZM7 11.0001H17V13.0001H7V11.0001Z"
      fill="currentColor"
    />
  </Svg>
);
export { ConstraintIcon };

export default ConstraintIcon;
