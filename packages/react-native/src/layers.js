import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LayersIcon = (props) => (
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
      d="M12.0004 1.9165L22.1004 6.12484L12.0004 10.3332L1.90039 6.12484L12.0004 1.9165ZM7.10039 6.12484L12.0004 8.1665L16.9004 6.12484L12.0004 4.08317L7.10039 6.12484ZM2.00039 9.9802L12.0004 14.2881L22.0004 9.9802V12.1611L12.396 16.2954L12.0004 16.4657L11.605 16.2955L2.00039 12.1611L2.00039 9.9802ZM2.00039 15.9802L12.0004 20.2881L22.0004 15.9802V18.1611L12.3967 22.2951L12.0004 22.4657L11.605 22.2955L2.00039 18.1611L2.00039 15.9802Z"
      fill="currentColor"
    />
  </Svg>
);
export { LayersIcon };

export default LayersIcon;
