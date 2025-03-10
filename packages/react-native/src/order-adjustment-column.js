import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const OrderAdjustmentColumnIcon = (props) => (
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
      d="M13.0001 3V11L18.5859 11L16.5859 9L18.0002 7.58579L22.4144 12L18.0002 16.4142L16.5859 15L18.5859 13L13.0001 13V21H11.0001V13L5.41436 13L7.41436 15L6.00015 16.4142L1.58594 12L6.00015 7.58579L7.41436 9L5.41436 11L11.0001 11V3H13.0001Z"
      fill="currentColor"
    />
  </Svg>
);
export { OrderAdjustmentColumnIcon };

export default OrderAdjustmentColumnIcon;
