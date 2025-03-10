import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CalculationIcon = (props) => (
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
      d="M7.5 2V5.5H11V7.5H7.5V11H5.5V7.5H2V5.5H5.5V2H7.5ZM13 5.5L22 5.5V7.5L13 7.5V5.5ZM10.7761 15.011L7.94765 17.8395L10.9366 20.8284L9.52239 22.2426L6.53344 19.2537L3.70501 22.0821L2.2908 20.6679L5.11922 17.8395L2.45132 15.1716L3.86554 13.7574L6.53344 16.4253L9.36186 13.5968L10.7761 15.011ZM16.5 13.998H18.5039V16.002H16.5V13.998ZM13 17H22V19H13V17ZM16.5 19.998H18.5039V22.002H16.5V19.998Z"
      fill="currentColor"
    />
  </Svg>
);
export { CalculationIcon };

export default CalculationIcon;
