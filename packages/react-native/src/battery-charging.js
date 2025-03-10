import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BatteryChargingIcon = (props) => (
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
      d="M12.3758 5.17246L8.78956 11H14.7896L9.32756 19.8758L7.62424 18.8276L11.2104 13H5.21044L10.6724 4.12427L12.3758 5.17246ZM0 5.00002H7.5V7.00002H2V17H6V19H0V5.00002ZM14 5.00002H21V19H13V17H19V7.00002H14V5.00002ZM24 9.00002V15H22V9.00002H24Z"
      fill="currentColor"
    />
  </Svg>
);
export { BatteryChargingIcon };

export default BatteryChargingIcon;
