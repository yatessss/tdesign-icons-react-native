import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const OrderAscendingIcon = (props) => (
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
      d="M19 2.58569L23.4142 6.99991L22 8.41412L20 6.41412L20 19.9999H18L18 6.41412L16 8.41412L14.5858 6.99991L19 2.58569ZM2 3.99991H13V5.99991H2V3.99991ZM2 10.9999H15V12.9999H2V10.9999ZM2 17.9999H15V19.9999H2V17.9999Z"
      fill="currentColor"
    />
  </Svg>
);
export { OrderAscendingIcon };

export default OrderAscendingIcon;
