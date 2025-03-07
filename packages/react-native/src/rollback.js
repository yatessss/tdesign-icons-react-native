import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RollbackIcon = (props) => (
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
      d="M20.9293 13.9999C20.444 17.3922 17.5266 19.9999 14.0001 19.9999H5.50015L5.50015 17.9999H14.0002C16.7616 17.9999 19.0001 15.7613 19.0001 12.9999C19.0001 10.2385 16.7616 7.99991 14.0001 7.99991L6.91436 7.99991L9.41436 10.4999L8.00015 11.9141L3.08594 6.99991L8.00015 2.08569L9.41436 3.49991L6.91436 5.99991L14.0001 5.99991C17.8661 5.99991 21.0001 9.13392 21.0001 12.9999V13.9999H20.9293Z"
      fill="currentColor"
    />
  </Svg>
);
export { RollbackIcon };

export default RollbackIcon;
