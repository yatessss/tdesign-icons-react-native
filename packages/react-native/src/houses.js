import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HousesIcon = (props) => (
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
      d="M11.9958 1.6582L22.4117 10.9168L21.083 12.4116L19.9999 11.4489V21.9998H3.99995V11.4536L2.90588 12.4109L1.58887 10.9058L5.99995 7.04607V2.99984H7.99995V5.25448L11.9958 1.6582ZM5.99995 9.70361V19.9998H8.99995V13.9998H14.9999V19.9998H17.9999V9.67113L12.0041 4.34147L7.65852 8.25249L5.99995 9.70361ZM12.9999 19.9998V15.9998H10.9999V19.9998H12.9999Z"
      fill="currentColor"
    />
  </Svg>
);
export { HousesIcon };

export default HousesIcon;
